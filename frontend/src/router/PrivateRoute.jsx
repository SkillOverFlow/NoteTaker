import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, element: Component, ...rest }) => {
  return isAuth ? Component : <Navigate to="/login" replace />;
};
