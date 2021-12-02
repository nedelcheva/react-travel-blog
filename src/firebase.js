import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBaAuo6afsartOI9DzuwEeXvoReqszeh1c",
  authDomain: "react-travel-blog-e4cbb.firebaseapp.com",
  projectId: "react-travel-blog-e4cbb",
  storageBucket: "react-travel-blog-e4cbb.appspot.com",
  messagingSenderId: "459034669417",
  appId: "1:459034669417:web:7a2eb0af525416c5430df8"
});

export default firebaseApp
export const auth = getAuth();