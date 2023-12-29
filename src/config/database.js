// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDugJlmqrrS5ZE7PKAfnS5268UNh0S21uY",
  authDomain: "apprestaurante-249aa.firebaseapp.com",
  projectId: "apprestaurante-249aa",
  storageBucket: "apprestaurante-249aa.appspot.com",
  messagingSenderId: "444015986371",
  appId: "1:444015986371:web:6a8ccd1cd0e7477d160476",
  measurementId: "G-81GHPS2004"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();