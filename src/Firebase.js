// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH62D7oGzf5xe0v2cKg36PvCWSM6163sI",
  authDomain: "instagram-dylan.firebaseapp.com",
  projectId: "instagram-dylan",
  storageBucket: "instagram-dylan.appspot.com",
  messagingSenderId: "727977898416",
  appId: "1:727977898416:web:f3326ef46fe0172b216675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);