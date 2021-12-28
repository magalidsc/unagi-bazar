import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7g8W29fBHMYDTg5qEzI5Q8d3U4Qq1IqM",
    authDomain: "unagi-bazar.firebaseapp.com",
    projectId: "unagi-bazar",
    storageBucket: "unagi-bazar.appspot.com",
    messagingSenderId: "455644997668",
    appId: "1:455644997668:web:aad3c90c664553f99550b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);