import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminPanel from "../pages/AdminPanel";
import Settings from "../pages/Settings";
import Favorites from "../pages/Favorites";
import RoleRoute from "./RoleRoute";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔵 AUTH ROUTES */}
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 🟢 PROTECTED APP */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/admin-panel"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <AdminPanel />
                </RoleRoute>
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/module/:type" element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
