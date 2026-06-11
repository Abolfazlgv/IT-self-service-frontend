import { NavLink } from "react-router-dom";
import { modules } from "../../data/modules";
import { useUserStore } from "../../store/userStore";
import { FaTimes } from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useUserStore();

  const sidebarModules = modules.filter((module) =>
    module.roles.includes(user.role),
  );

  return (
    <>
      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          lg:static

          top-0
          left-0

          h-screen
          w-64

          bg-slate-900
          text-white

          z-50

          transform
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        <div
          className="
            p-6
            text-xl
            font-bold

            border-b
            border-slate-700

            flex
            justify-between
            items-center
          "
        >
          <NavLink onClick={() => setSidebarOpen(false)} to="/">
            IT Portal
          </NavLink>

          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {sidebarModules.map((module) => {
            const Icon = module.icon;

            return (
              <NavLink
                key={module.path}
                to={module.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive ? "bg-blue-600" : "hover:bg-slate-800"
                  }`
                }
              >
                <Icon />

                <span>{module.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
