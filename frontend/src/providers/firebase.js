import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { constants } from "../utils/Constants";

var firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
// firebase.analytics();

// const socialNetworkProvider = (socialNetwork) => {
//   switch (socialNetwork) {
//     case constants.github:
//       return new firebase.auth.GithubAuthProvider();
//     case constants.twitter:
//       return new firebase.auth.TwitterAuthProvider();
//     default:
//       return new firebase.auth.GoogleAuthProvider();
//   }
// };

export { db, auth, GoogleProvider };
