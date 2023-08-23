// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf1zuPJPCKKTfF8HTQtE-ns9X6DWdinDU",
  authDomain: "native-restuarant.firebaseapp.com",
  projectId: "native-restuarant",
  storageBucket: "native-restuarant.appspot.com",
  messagingSenderId: "450914234589",
  appId: "1:450914234589:web:8159a78986300f372bab34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)