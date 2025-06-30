import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuth ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
