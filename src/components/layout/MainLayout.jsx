import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect, useState } from "react";

import { useUserStore } from "../../store/userStore";
import { useFavoriteStore } from "../../store/favoriteStore";
import { useResourceStore } from "../../store/resourceStore";
import { useThemeStore } from "../../store/themeStore";

function MainLayout() {
  const { theme } = useThemeStore();
  const { user } = useUserStore();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadResources = useResourceStore((state) => state.loadResources);

  const loadFavorites = useFavoriteStore((state) => state.loadFavorites);

  useEffect(() => {
    loadResources();
  }, [loadResources]);

  useEffect(() => {
    loadFavorites(user?.id);
  }, [user, loadFavorites]);

  return (
    <div className={theme === "dark" ? "dark min-h-screen" : "min-h-screen"}>
      <div
        className="
          h-screen
          flex

          bg-slate-100
          dark:bg-slate-950

          text-slate-900
          dark:text-white
        "
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header setSidebarOpen={setSidebarOpen} />

          <main
            className="
              flex-1
              overflow-auto

              p-4
              md:p-6

              bg-slate-100
              dark:bg-slate-950
            "
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
