// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD78Ttu-qBs1kGG5AOtVCB1VUt8_CxIFps",
    authDomain: "router-firebase-auth-b5ff3.firebaseapp.com",
    projectId: "router-firebase-auth-b5ff3",
    storageBucket: "router-firebase-auth-b5ff3.appspot.com",
    messagingSenderId: "119216652807",
    appId: "1:119216652807:web:5c101edb657afaf29d60a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;