// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyDYrzRnr8qNjXLD4Po__Mjcc449Tbvmums",
  authDomain: "doctor-portal-bcafa.firebaseapp.com",
  projectId: "doctor-portal-bcafa",
  storageBucket: "doctor-portal-bcafa.appspot.com",
  messagingSenderId: "900228813491",
  appId: "1:900228813491:web:7f3514aecded45994496c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;