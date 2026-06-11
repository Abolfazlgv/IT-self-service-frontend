import { create } from "zustand";
import { resources as defaultResources } from "../data/resources";

const STORAGE_KEY = "portal_resources";

export const useResourceStore = create((set, get) => ({
  resources: [],

  loadResources: () => {
    const stored =
      JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      );

    if (stored && stored.length > 0) {
      set({
        resources: stored,
      });

      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultResources)
    );

    set({
      resources: defaultResources,
    });
  },

  addResource: (resource) => {
    const newResource = {
      ...resource,
      id: Date.now(),
    };

    const updated = [
      ...get().resources,
      newResource,
    ];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    set({
      resources: updated,
    });
  },

  updateResource: (
    id,
    updatedData
  ) => {
    const updated =
      get().resources.map(
        (resource) =>
          resource.id === id
            ? {
                ...resource,
                ...updatedData,
              }
            : resource
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    set({
      resources: updated,
    });
  },

  deleteResource: (id) => {
    const updated =
      get().resources.filter(
        (resource) =>
          resource.id !== id
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    set({
      resources: updated,
    });
  },
}));