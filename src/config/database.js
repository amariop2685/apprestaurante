// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJ3e_2AWzgzhd167iq3v9TH2C7P_MyjU",
  authDomain: "restaurant-8ec55.firebaseapp.com",
  projectId: "restaurant-8ec55",
  storageBucket: "restaurant-8ec55.appspot.com",
  messagingSenderId: "232674012572",
  appId: "1:232674012572:web:f433bb8a70572679276c59"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();