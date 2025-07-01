import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuth, element: Component, ...rest }) => {
  return !isAuth ? Component : <Navigate to="/" replace />;
};
