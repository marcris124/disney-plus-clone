// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_LTI9HQwnys3twemqOao8EjfCpW8fu0",
  authDomain: "clone-disney-plus-dcfa0.firebaseapp.com",
  projectId: "clone-disney-plus-dcfa0",
  storageBucket: "clone-disney-plus-dcfa0.appspot.com",
  messagingSenderId: "788269169861",
  appId: "1:788269169861:web:8536704dc2e7f1d46e84ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)