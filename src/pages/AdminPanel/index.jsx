import { useMemo, useState } from "react";
import { useUserStore } from "../../store/userStore";
import { resources } from "../../data/resources";
import { modules } from "../../data/modules";

function AdminPanel() {
  const currentUser = useUserStore((state) => state.user);

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase();

    return users.filter(
      (user) =>
        user.name?.toLowerCase().startsWith(query) ||
        user.email?.toLowerCase().startsWith(query),
    );
  }, [users, search]);

  const saveUsers = (updatedUsers) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUsers(updatedUsers);
  };

  const toggleRole = (id) => {
    const targetUser = users.find((u) => u.id === id);

    if (!targetUser) return;

    if (targetUser.role === "admin") {
      const admins = users.filter((u) => u.role === "admin");

      if (admins.length === 1) {
        alert("Cannot remove the last administrator.");
        return;
      }
    }

    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            role: user.role === "admin" ? "user" : "admin",
          }
        : user,
    );

    saveUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const targetUser = users.find((u) => u.id === id);

    if (!targetUser) return;

    if (targetUser.id === currentUser?.id) {
      alert("You cannot delete your own account.");
      return;
    }

    if (targetUser.role === "admin") {
      const admins = users.filter((u) => u.role === "admin");

      if (admins.length === 1) {
        alert("Cannot delete the last administrator.");
        return;
      }
    }

    const confirmed = window.confirm(`Delete ${targetUser.name}?`);

    if (!confirmed) return;

    const updatedUsers = users.filter((u) => u.id !== id);

    saveUsers(updatedUsers);
  };

  const totalAdmins = users.filter((u) => u.role === "admin").length;

  const totalUsers = users.filter((u) => u.role === "user").length;

  return (
    <div className=" mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Admin Panel
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage users, permissions and portal resources
        </p>
      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-5 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6">
          <h3 className="text-slate-500 dark:text-slate-400">Users</h3>

          <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            {users.length}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6">
          <h3 className="text-slate-500 dark:text-slate-400">Admins</h3>

          <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            {totalAdmins}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6">
          <h3 className="text-slate-500 dark:text-slate-400">Users Role</h3>

          <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            {totalUsers}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6">
          <h3 className="text-slate-500 dark:text-slate-400">Resources</h3>

          <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            {resources.length}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6">
          <h3 className="text-slate-500 dark:text-slate-400">Modules</h3>

          <p className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
            {modules.length}
          </p>
        </div>
      </div>

      {/* USERS */}

      <div
        className="
    bg-white
    dark:bg-slate-800

    border
    border-slate-200
    dark:border-slate-700

    rounded-3xl
    p-6
  "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            User Management
          </h2>

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
        px-4
        py-3

        rounded-xl

        border
        border-slate-300
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        text-slate-900
        dark:text-white

        outline-none

        focus:ring-2
        focus:ring-blue-500

        md:w-80
      "
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-4 text-slate-500">Name</th>

                <th className="text-left py-4 text-slate-500">Email</th>

                <th className="text-left py-4 text-slate-500">Role</th>

                <th className="text-left py-4 text-slate-500">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="
              border-b
              border-slate-100
              dark:border-slate-700
            "
                >
                  <td className="py-4 text-slate-900 dark:text-white">
                    {user.name}
                  </td>

                  <td className="py-4 text-slate-500">{user.email}</td>

                  <td className="py-4">
                    <span
                      className={
                        user.role === "admin"
                          ? `
                      px-3
                      py-1
                      rounded-full
                      bg-purple-100
                      text-purple-700
                      text-sm
                      font-medium
                    `
                          : `
                      px-3
                      py-1
                      rounded-full
                      bg-blue-100
                      text-blue-700
                      text-sm
                      font-medium
                    `
                      }
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="py-4">
                    {user.id !== currentUser?.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleRole(user.id)}
                          className={
                            user.role === "admin"
                              ? `
                          px-4
                          py-2
                          rounded-xl
                          bg-orange-500
                          hover:bg-orange-600
                          text-white
                          transition
                        `
                              : `
                          px-4
                          py-2
                          rounded-xl
                          bg-blue-600
                          hover:bg-blue-700
                          text-white
                          transition
                        `
                          }
                        >
                          {user.role === "admin"
                            ? "Remove Admin"
                            : "Make Admin"}
                        </button>

                        <button
                          onClick={() => deleteUser(user.id)}
                          className="
                      px-4
                      py-2
                      rounded-xl

                      bg-red-600
                      hover:bg-red-700

                      text-white
                      transition
                    "
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span className="text-slate-500 text-sm">
                        Current User
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
