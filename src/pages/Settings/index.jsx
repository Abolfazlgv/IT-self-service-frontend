import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaStar,
  FaSave,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useUserStore } from "../../store/userStore";
import { useThemeStore } from "../../store/themeStore";
import { useFavoriteStore } from "../../store/favoriteStore";

function Settings() {
  const { user, logout, updateUser } = useUserStore();

  const { theme, toggleTheme } = useThemeStore();

  const { favoriteIds } = useFavoriteStore();

  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");

  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      return;
    }

    updateUser({
      name,
      email,
    });

    alert("Profile updated successfully");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className=" mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage your account and portal preferences
        </p>
      </div>

      {/* PROFILE */}
      <div
        className="
          bg-white
          dark:bg-slate-800
          border
          border-slate-200
          dark:border-slate-700
          rounded-3xl
          shadow-sm
          p-8
          mb-6
        "
      >
        <div className="flex items-center gap-6">
          <div
            className="
              w-24
              h-24
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
            "
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {user?.name}
            </h2>

            <p className="text-slate-500 mt-1">{user?.email}</p>

            <span
              className="
                inline-block
                mt-3
                px-3
                py-1
                rounded-full
                bg-blue-100
                text-blue-700
                text-sm
                font-medium
              "
            >
              {user?.role}
            </span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* ACCOUNT */}
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
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
            Account Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-500">Full Name</label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  mt-1
                  p-3
                  rounded-xl
                  border
                  bg-white
                  dark:bg-slate-900
                  border-slate-300
                  dark:border-slate-700
                  text-slate-900
                  dark:text-white
                "
              />
            </div>

            <div>
              <label className="text-sm text-slate-500">Email</label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  mt-1
                  p-3
                  rounded-xl
                  border
                  bg-white
                  dark:bg-slate-900
                  border-slate-300
                  dark:border-slate-700
                  text-slate-900
                  dark:text-white
                "
              />
            </div>

            <button
              onClick={handleSave}
              className="
                flex
                items-center
                gap-2
                mt-2
                px-5
                py-3
                rounded-xl
                bg-green-600
                hover:bg-green-700
                text-white
                transition
              "
            >
              <FaSave />
              Save Changes
            </button>
          </div>
        </div>

        {/* APPEARANCE */}
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
          <h3 className="text-xl font-semibold mb-6">Appearance</h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>

              <p className="text-sm text-slate-500">
                Switch between light and dark mode
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
              "
            >
              {theme === "dark" ? (
                <>
                  <FaSun />
                  Light
                </>
              ) : (
                <>
                  <FaMoon />
                  Dark
                </>
              )}
            </button>
          </div>
        </div>

        {/* ACTIVITY */}
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
          <h3 className="text-xl font-semibold mb-6">Activity</h3>

          <div className="flex items-center gap-4">
            <FaStar className="text-yellow-500 text-2xl" />

            <div>
              <p className="text-sm text-slate-500">Favorite Resources</p>

              <p className="text-2xl font-bold">{favoriteIds.length}</p>
            </div>
          </div>
        </div>

        {/* SECURITY */}
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
          <h3 className="text-xl font-semibold mb-6">Security</h3>

          <p className="text-slate-500 mb-4">
            End your current session and return to login page.
          </p>

          <button
            onClick={handleLogout}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-red-600
              hover:bg-red-700
              text-white
            "
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
