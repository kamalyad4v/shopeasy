import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wrapper component — redirects to /login if not logged in
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
