import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA3ZqntHhWbPbW4GWW0SZTnzAzJSyxG9sk",
    authDomain: "contact-form-bff3f.firebaseapp.com",
    projectId: "contact-form-bff3f",
    storageBucket: "contact-form-bff3f.appspot.com",
    messagingSenderId: "577554664090",
    appId: "1:577554664090:web:4627d0ca430572810b2d23"

});


var db = firebaseApp.firestore();

export  {db}

