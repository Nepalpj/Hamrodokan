import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, adminRoute, isAdmin, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (adminRoute && !isAdmin) {
    return <Navigate to="unauthorized" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
