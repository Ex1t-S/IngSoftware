import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj6tN8oqn2GSsb_KwRwZiEEa6HqXAuJyM",
  authDomain: "pharmafacil-b9384.firebaseapp.com",
  projectId: "pharmafacil-b9384",
  storageBucket: "pharmafacil-b9384.firebasestorage.app",
  messagingSenderId: "95441179781",
  appId: "1:95441179781:web:862c9924215303b17c85ec",
  measurementId: "G-MJ28WNMHZ2"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);