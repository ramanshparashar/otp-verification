// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuw4umZKu6uAX1M57wzAuoDh6SHj1BELM",
  authDomain: "otp-project-61e07.firebaseapp.com",
  projectId: "otp-project-61e07",
  storageBucket: "otp-project-61e07.firebasestorage.app",
  messagingSenderId: "518169655028",
  appId: "1:518169655028:web:de72b9bc5f54dc1b8410a1",
  measurementId: "G-2RC74X77GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
