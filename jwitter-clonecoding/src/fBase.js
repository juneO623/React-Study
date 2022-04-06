import firebase from "firebase/compat/app";
// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { getStorage } from "firebase/storage";

// import { FirebaseError, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ldOmavkQdhr9aVzlUBudUQmoFi4HoeE",
  authDomain: "jwitter-d5381.firebaseapp.com",
  projectId: "jwitter-d5381",
  storageBucket: "jwitter-d5381.appspot.com",
  messagingSenderId: "866451274578",
  appId: "1:866451274578:web:73a24bd275e06fe45b188b",
};

firebase.initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
// export const storageService = getStorage();
