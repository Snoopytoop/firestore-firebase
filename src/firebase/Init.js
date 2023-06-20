// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEp0jBJjRpsyEALyKGBQbzWpGIqKUSxUg",
  authDomain: "fir-practise-b4e83.firebaseapp.com",
  projectId: "fir-practise-b4e83",
  storageBucket: "fir-practise-b4e83.appspot.com",
  messagingSenderId: "865063991693",
  appId: "1:865063991693:web:47e80f7e30bb2b1d10a5c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
