import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

function RoleRoute({ allowedRoles, children }) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RoleRoute;
