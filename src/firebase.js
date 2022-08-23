import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCdVEcgXqVrfWiuu8MxrNII2FGQu-ixPnE",
    authDomain: "db-shop-78ab6.firebaseapp.com",
    databaseURL: "https://db-shop-78ab6-default-rtdb.firebaseio.com",
    projectId: "db-shop-78ab6",
    storageBucket: "db-shop-78ab6.appspot.com",
    messagingSenderId: "883895377215",
    appId: "1:883895377215:web:f5f0eec333981f3ba5878a",
    measurementId: "G-662YC7G6TE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
