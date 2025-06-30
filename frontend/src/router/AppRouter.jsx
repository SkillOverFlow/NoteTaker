import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
// import { login, observableNext } from "../redux/actions/authActions";
// import { userNotes } from "../redux/actions/noteActions";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { observable, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    alert("AppRoute");
  }, []);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user?.uid) {
  //       // dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
  //       // dispatch(userNotes());
  //     } else {
  //       // dispatch(observableNext());
  //     }
  //   });
  // }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* Redirect all unknown routes */}
        </Routes>
      </Router>
    </>
  );
};
