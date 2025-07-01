import { signInWithPopup } from "firebase/auth";
import { auth, GoogleProvider } from "../../providers/firebase";
import { AUTH_LOGIN } from "../reducers/authReducer";
// import { types } from "../types/types";
// import { resetNotes } from "../actions/noteActions";

export const loginSocialNetworks = () => {
  return async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      const user = result.user;
      dispatch(
        AUTH_LOGIN({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};

// export const observableNext = () => ({
//   type: types.observableNext,
// });

// export const logoutApp = () => {
//   return (dispatch) => {
//     firebase.auth().signOut();
//     dispatch(resetNotes());
//     dispatch(logout());
//   };
// };

// const logout = () => ({
//   type: types.authLogout,
// });
