// components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("Token");
  return isAuthenticated ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;
