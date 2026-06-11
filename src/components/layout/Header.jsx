import { useUserStore } from "../../store/userStore";
import { useSearchStore } from "../../store/searchStore";
import { useThemeStore } from "../../store/themeStore";
import SearchDropdown from "../search/SearchDropdown";
import { useEffect, useRef } from "react";
import { resources } from "../../data/resources";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
function Header({ setSidebarOpen }) {
  const { user } = useUserStore();
  const { theme, toggleTheme } = useThemeStore();
  const searchRef = useRef();

  const {
    searchTerm,
    setSearchTerm,
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    resetSearch,
  } = useSearchStore();

  // search results (IMPORTANT)
  const query = searchTerm.toLowerCase();

  const results = resources
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
    })
    .slice(0, 8);

  // keyboard control
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        resetSearch();
      }

      if (e.key === "ArrowDown") {
        setActiveIndex(Math.min(activeIndex + 1, results.length - 1));
      }

      if (e.key === "ArrowUp") {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      }

      if (e.key === "Enter") {
        const index = activeIndex >= 0 ? activeIndex : 0;

        const selected = results[index];

        if (selected) {
          window.open(selected.url, "_blank");
          resetSearch();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, results]);

  // click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        resetSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
      md:h-19.25
      px-4
      md:px-6
      py-3

      flex
      items-center
      justify-between

      border-b

      bg-white
      dark:bg-slate-900

      border-slate-200
      dark:border-slate-700
    "
    >
      <div className="flex items-center gap-4">
        <button
          className="
          lg:hidden
          text-xl
        "
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h1
          className="
          hidden
          sm:block

          text-xl
          font-semibold
        "
        >
          IT Self Service Portal
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="
          p-2
          rounded-lg

          border

          border-slate-200
          dark:border-slate-700

          hover:bg-slate-100
          dark:hover:bg-slate-800
        "
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <div
          ref={searchRef}
          className="
          hidden
          md:block

          relative
          w-80
        "
        >
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);

              setIsOpen(true);
              setActiveIndex(-1);
            }}
            className="
            w-full

            px-4
            py-2

            rounded-lg
            border

            bg-white
            dark:bg-slate-800

            text-slate-900
            dark:text-white

            border-slate-300
            dark:border-slate-700
          "
          />

          <SearchDropdown results={results} />
        </div>

        <div className="hidden md:block text-right">
          <p className="font-medium">{user.name}</p>

          <p
            className="
            text-sm
            text-slate-500
          "
          >
            {user.role}
          </p>
        </div>

        <NavLink to="/settings">
          <div
            className="
            w-10
            h-10

            rounded-full

            bg-blue-600
            text-white

            flex
            items-center
            justify-center

            font-semibold
          "
          >
            {user.name.charAt(0).toUpperCase()}
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
