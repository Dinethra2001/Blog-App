// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fc974.firebaseapp.com",
  projectId: "mern-blog-fc974",
  storageBucket: "mern-blog-fc974.appspot.com",
  messagingSenderId: "924310346763",
  appId: "1:924310346763:web:b420150b3e4e0a4982fb0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);