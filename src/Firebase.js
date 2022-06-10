// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyA3ZqntHhWbPbW4GWW0SZTnzAzJSyxG9sk",
    authDomain: "contact-form-bff3f.firebaseapp.com",
    databaseURL: "https://contact-form-bff3f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-form-bff3f",
    storageBucket: "contact-form-bff3f.appspot.com",
    messagingSenderId: "577554664090",
    appId: "1:577554664090:web:4627d0ca430572810b2d23"
});

const db = getFirestore(firebaseConfig);

export { db, collection, addDoc };