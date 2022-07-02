// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD89vAskPDp9vStmnCcotmZf5Y6pGtwvfs",
    authDomain: "task-manager-ae50c.firebaseapp.com",
    projectId: "task-manager-ae50c",
    storageBucket: "task-manager-ae50c.appspot.com",
    messagingSenderId: "892366843868",
    appId: "1:892366843868:web:1d0f80fd09eb21e14ea919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;