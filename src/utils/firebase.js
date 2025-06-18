// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtYuj6N6C5fKMyPeGsapfS6EczKZYt3l8",
  authDomain: "netflixgpt-a8247.firebaseapp.com",
  projectId: "netflixgpt-a8247",
  storageBucket: "netflixgpt-a8247.firebasestorage.app",
  messagingSenderId: "203433113669",
  appId: "1:203433113669:web:14ff70d8dd973ed9f88b2c",
  measurementId: "G-F65HCK2SF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();