import React from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

const PrivateUser = () => {
  const userCooki = document.cookie;
  return userCooki ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateUser;
