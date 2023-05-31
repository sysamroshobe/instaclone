// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2-iOdguqsMZ7_LcRF93z_XhtN4MKo58",
  authDomain: "insta-2-yt-117ae.firebaseapp.com",
  projectId: "insta-2-yt-117ae",
  storageBucket: "insta-2-yt-117ae.appspot.com",
  messagingSenderId: "792483517938",
  appId: "1:792483517938:web:29f095045773ecda88c76b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
