import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "PUT_HERE",
  authDomain: "PUT_HERE",
  projectId: "amjad-saas",
  storageBucket: "PUT_HERE",
  messagingSenderId: "PUT_HERE",
  appId: "PUT_HERE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
