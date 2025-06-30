import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { constants } from "../utils/Constants";

var firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_APIKEY,
  authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.REACT_APP_APPID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
// firebase.analytics();

const db = getFirestore(app);

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

export { db };
