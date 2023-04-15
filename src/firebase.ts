// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgYNfYJryPuCbCGphxhk_vkkJYLeI4Quc",
  authDomain: "react-real-time-chat-c3969.firebaseapp.com",
  projectId: "react-real-time-chat-c3969",
  storageBucket: "react-real-time-chat-c3969.appspot.com",
  messagingSenderId: "1008856919761",
  appId: "1:1008856919761:web:d1d572bf264113711cdff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);