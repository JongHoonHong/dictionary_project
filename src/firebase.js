// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrcO1lg_cDPke7UqZNM-lNIOmfDTxrS-4",
  authDomain: "sparta-react-64c00.firebaseapp.com",
  projectId: "sparta-react-64c00",
  storageBucket: "sparta-react-64c00.appspot.com",
  messagingSenderId: "873637459898",
  appId: "1:873637459898:web:4f542daf91e39e5ecc0f83",
  measurementId: "G-P10TKNDX6P",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
