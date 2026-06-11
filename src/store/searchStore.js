import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchTerm: "",
  isOpen: false,
  activeIndex: -1,

  setSearchTerm: (value) =>
    set({
      searchTerm: value,
      isOpen: value.trim().length > 0,
    }),

  setIsOpen: (value) => set({ isOpen: value }),

  setActiveIndex: (index) =>
    set({ activeIndex: index }),

  resetSearch: () =>
    set({
      searchTerm: "",
      isOpen: false,
      activeIndex: -1,
    }),
}));