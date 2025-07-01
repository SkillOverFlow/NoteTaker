import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { auth } from "../providers/firebase";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AUTH_LOGIN } from "../redux/reducers/authReducer";
import { userNotes } from "../redux/actions/noteActions";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(
          AUTH_LOGIN({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        dispatch(userNotes);
      } else {
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute isAuth={uid} element={<Home />} />}
          />
          <Route
            path="/login"
            element={<PublicRoute isAuth={uid} element={<Login />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          {/* Redirect all unknown routes */}
        </Routes>
      </Router>
    </>
  );
};
