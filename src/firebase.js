// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "dood-s-wine.firebaseapp.com",
  projectId: "dood-s-wine",
  storageBucket: "dood-s-wine.firebasestorage.app",
  messagingSenderId: "7454974116",
  appId: "1:7454974116:web:46249e9424c246ed990631",
  measurementId: "G-D9J51LKNJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);