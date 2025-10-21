import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8bJ8YjuOwyzKBiBu0RbSO0KqM4f1LiTA",
  authDomain: "feedback-wall-6dddd.firebaseapp.com",
  projectId: "feedback-wall-6dddd",
  storageBucket: "feedback-wall-6dddd.firebasestorage.app",
  messagingSenderId: "449002299439",
  appId: "1:449002299439:web:5c0df7653c9828e69526da",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
