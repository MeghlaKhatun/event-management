// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjtWC2Xj11Vcl-ajEvzyJSgzcubEixatQ",
  authDomain: "event-management-ass.firebaseapp.com",
  projectId: "event-management-ass",
  storageBucket: "event-management-ass.appspot.com",
  messagingSenderId: "566688131349",
  appId: "1:566688131349:web:3a93e3411c7e8f6d17e11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;