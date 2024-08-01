// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5fe89.firebaseapp.com",
  projectId: "mern-estate-5fe89",
  storageBucket: "mern-estate-5fe89.appspot.com",
  messagingSenderId: "732564579751",
  appId: "1:732564579751:web:861abe638da82049c20282"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);