// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5wZZQoBJ2_XpXHCXrRObWJ46u1xPbywE",
  authDomain: "lilac-cosmetic-website.firebaseapp.com",
  projectId: "lilac-cosmetic-website",
  storageBucket: "lilac-cosmetic-website.appspot.com",
  messagingSenderId: "635750327091",
  appId: "1:635750327091:web:49ce434dc0468a56955446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
