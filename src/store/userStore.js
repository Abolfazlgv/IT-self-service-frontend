import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  login: async (email, password) => {
    set({
      loading: true,
      error: null,
    });

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!found) {
      set({
        error: "Invalid credentials",
        loading: false,
      });
      return false;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(found)
    );

    set({
      user: found,
      loading: false,
      error: null,
    });

    return true;
  },

  register: async (
    name,
    email,
    password
  ) => {
    set({
      loading: true,
      error: null,
    });

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === email
    );

    if (exists) {
      set({
        error: "User already exists",
        loading: false,
      });

      return false;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user",
    };

    const updated = [
      ...users,
      newUser,
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updated)
    );

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    set({
      user: newUser,
      loading: false,
      error: null,
    });

    return true;
  },

  updateUser: (data) => {
    const current =
      get().user;

    if (!current) return;

    const updatedUser = {
      ...current,
      ...data,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const updatedUsers = users.map(
      (user) =>
        user.id === current.id
          ? updatedUser
          : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    set({
      user: updatedUser,
    });
  },

  logout: () => {
    localStorage.removeItem("user");

    set({
      user: null,
      error: null,
      loading: false,
    });
  },
}));