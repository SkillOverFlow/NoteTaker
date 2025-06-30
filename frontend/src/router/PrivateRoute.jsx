import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  useEffect(() => {
    alert("Private Route");
  }, []);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};
