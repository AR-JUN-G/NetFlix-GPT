// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIkwuxcxE8RiLWsreYNDkXdcPAvg9Db4M",
  authDomain: "netflixgpt-1e782.firebaseapp.com",
  projectId: "netflixgpt-1e782",
  storageBucket: "netflixgpt-1e782.appspot.com",
  messagingSenderId: "453567276265",
  appId: "1:453567276265:web:72522c0cf18fc7030afc78",
  measurementId: "G-DK74N4PZ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();