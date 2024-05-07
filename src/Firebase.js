import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnSGtzXlc-6YuchStxEKkHxITK9Q-6_l0",
  authDomain: "react-and-firebase-fda4f.firebaseapp.com",
  projectId: "react-and-firebase-fda4f",
  storageBucket: "react-and-firebase-fda4f.appspot.com",
  messagingSenderId: "926854254754",
  appId: "1:926854254754:web:253f8d7148dc8af3cf47fb",
  databaseURL: "https://react-and-firebase-fda4f-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
