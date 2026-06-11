import { create } from "zustand";

const savedTheme = localStorage.getItem("theme") || "light";

export const useThemeStore = create((set) => ({
  theme: savedTheme,

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return {
        theme: newTheme,
      };
    }),
}));
