// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfymZBIJiUVu-I_2z4kdxUuVfIZ9RHzGs",
    authDomain: "proyectoreactsweet.firebaseapp.com",
    projectId: "proyectoreactsweet",
    storageBucket: "proyectoreactsweet.appspot.com",
    messagingSenderId: "52379262009",
    appId: "1:52379262009:web:9b5b5be757bc29a2cf81e8",
    measurementId: "G-Z7NGMKHPBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db
