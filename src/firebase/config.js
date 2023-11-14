// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLwQ5PhYWAIzA2zLSELzzCC5hBc7s3fno",
  authDomain: "astro-starting-blog.firebaseapp.com",
  projectId: "astro-starting-blog",
  storageBucket: "astro-starting-blog.appspot.com",
  messagingSenderId: "280555811183",
  appId: "1:280555811183:web:fc05d81dd78f75219f389a",
  measurementId: "G-0RF5Y31WMM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
