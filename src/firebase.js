 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApqWcetwV5XFzC0L09Eo5uKKUVhGm8N5M",
  authDomain: "jane-can-do-5a043.firebaseapp.com",
  projectId: "jane-can-do-5a043",
  storageBucket: "jane-can-do-5a043.appspot.com",
  messagingSenderId: "12089382179",
  appId: "1:12089382179:web:120df0b25874a707012896"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)