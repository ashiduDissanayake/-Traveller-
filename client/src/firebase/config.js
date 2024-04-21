// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8PIdF3gwQet9ZGHg6ZIDkmlP3_BMhUr4",
  authDomain: "traveller-cf43f.firebaseapp.com",
  projectId: "traveller-cf43f",
  storageBucket: "traveller-cf43f.appspot.com",
  messagingSenderId: "270198338136",
  appId: "1:270198338136:web:bc0b77a1e80509a1e7d02d",
  measurementId: "G-D1DG8DP0SQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();