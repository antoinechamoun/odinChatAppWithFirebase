import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACSj4EY6lXVDu_wfoB9WZwME0oYP6mUts",
  authDomain: "odinchatapp.firebaseapp.com",
  projectId: "odinchatapp",
  storageBucket: "odinchatapp.appspot.com",
  messagingSenderId: "981724907534",
  appId: "1:981724907534:web:673668e65b070a4883145f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const SignIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};

export const SignOut = () => {
  signOut(getAuth());
};

export const isUserSignedIn = () => {
  return !!getAuth().currentUser;
};

export const getProfilePicUrl = () => {
  return getAuth().currentUser?.photoURL || "/images/profile_placeholder.png";
};

export const getUserName = () => {
  let user = getAuth().currentUser?.displayName;
  if (typeof user == "string") {
    return user;
  }
  return "";
};
