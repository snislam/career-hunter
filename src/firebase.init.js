// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoR_oPg2IJ3S0ELvkc-b5OwsUoA1m5DHQ",
    authDomain: "career-hunter-6eb88.firebaseapp.com",
    projectId: "career-hunter-6eb88",
    storageBucket: "career-hunter-6eb88.appspot.com",
    messagingSenderId: "312178640568",
    appId: "1:312178640568:web:c5596ddbe18e8a0d2a164d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;