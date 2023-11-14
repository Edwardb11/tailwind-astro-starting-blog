import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLwQ5PhYWAIzA2zLSELzzCC5hBc7s3fno",
  authDomain: "astro-starting-blog.firebaseapp.com",
  projectId: "astro-starting-blog",
  storageBucket: "astro-starting-blog.appspot.com",
  messagingSenderId: "280555811183",
  appId: "1:280555811183:web:fc05d81dd78f75219f389a",
  measurementId: "G-0RF5Y31WMM"
};

export const app = initializeApp(firebaseConfig);
