import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCxShv-uVUwk3g-DuLemCcqXqb0K6nnKzU",
  authDomain: "react-redux-app-bb1d9.firebaseapp.com",
  projectId: "react-redux-app-bb1d9",
  storageBucket: "react-redux-app-bb1d9.appspot.com",
  messagingSenderId: "172244690150",
  appId: "1:172244690150:web:0237a8e3f0a7e06e5f0727",
  measurementId: "G-HSE0BJG6DY"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)