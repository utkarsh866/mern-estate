// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDQ2PCwY4dkDW_O1EZxUQqqaOL6vSSPhFc",
  authDomain: "mern-estate-ee1bf.firebaseapp.com",
  projectId: "mern-estate-ee1bf",
  storageBucket: "mern-estate-ee1bf.appspot.com",
  messagingSenderId: "1030004034319",
  appId: "1:1030004034319:web:dc37fe77dba6cd94a80c7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);