import { create } from "zustand";

const getStorageKey = (userId) =>
  `favorites_${userId}`;

export const useFavoriteStore = create(
  (set, get) => ({
    favoriteIds: [],

    loadFavorites: (userId) => {
      if (!userId) {
        set({ favoriteIds: [] });
        return;
      }

      const favorites =
        JSON.parse(
          localStorage.getItem(
            getStorageKey(userId)
          )
        ) || [];

      set({
        favoriteIds: favorites,
      });
    },

    addFavorite: (id, userId) => {
      if (!userId) return;

      set((state) => {
        if (
          state.favoriteIds.includes(id)
        ) {
          return state;
        }

        const updated = [
          ...state.favoriteIds,
          id,
        ];

        localStorage.setItem(
          getStorageKey(userId),
          JSON.stringify(updated)
        );

        return {
          favoriteIds: updated,
        };
      });
    },

    removeFavorite: (
      id,
      userId
    ) => {
      if (!userId) return;

      set((state) => {
        const updated =
          state.favoriteIds.filter(
            (item) => item !== id
          );

        localStorage.setItem(
          getStorageKey(userId),
          JSON.stringify(updated)
        );

        return {
          favoriteIds: updated,
        };
      });
    },
  })
);