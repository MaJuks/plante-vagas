import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userType || "")) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
