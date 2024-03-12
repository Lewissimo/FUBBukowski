import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBU8azB8Z9unROErH7ld-UYFmSoXdJXqIU",
  authDomain: "fubbukowski-aa040.firebaseapp.com",
  projectId: "fubbukowski-aa040",
  storageBucket: "fubbukowski-aa040.appspot.com",
  messagingSenderId: "581188599929",
  appId: "1:581188599929:web:85ad64e7d831ff254314a8",
  measurementId: "G-3BTD5S86Y4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);
