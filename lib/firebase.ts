// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr04uygq7bMi6xnPlw2sQWcJUjkM9n1ho",
  authDomain: "fir-69ad1.firebaseapp.com",
  projectId: "fir-69ad1",
  storageBucket: "fir-69ad1.firebasestorage.app",
  messagingSenderId: "646098866037",
  appId: "1:646098866037:web:fc4acc71efcb7530d70d3c",
  measurementId: "G-4TK3NLPEVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };