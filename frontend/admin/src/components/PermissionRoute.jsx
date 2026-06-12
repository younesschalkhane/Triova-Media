import { Navigate } from "react-router-dom";
import { canAccessRoute, getCurrentUser, getDefaultRoute } from "../auth/mockAuth";

export default function PermissionRoute({ path, children }) {
  const user = getCurrentUser();

  if (!canAccessRoute(user, path)) {
    return <Navigate to={getDefaultRoute(user)} replace />;
  }

  return children;
}
