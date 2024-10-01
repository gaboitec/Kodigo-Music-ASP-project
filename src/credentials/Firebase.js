// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {




  apiKey: "AIzaSyA-8sppEw58DcNY2YBCD6hdqCr1xXgM7Jk",
  authDomain: "primerproyectoserio-a892d.firebaseapp.com",
  projectId: "primerproyectoserio-a892d",
  storageBucket: "primerproyectoserio-a892d.appspot.com",
  messagingSenderId: "939905884111",
  appId: "1:939905884111:web:65b050c7a9af8015333cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);