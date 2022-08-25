import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword , getAuth} from "firebase/auth";
import {toastSuccess, toastFail} from '../../common/utils';
import {getFirestore} from 'firebase/firestore';
 const firebaseConfig = {
  apiKey: "AIzaSyB4d8CWNYp9u4NIzdoCFwJgOus8ElfOzZk",
  authDomain: "fashion-56504.firebaseapp.com",
  databaseURL: "https://fashion-56504-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fashion-56504",
  storageBucket: "fashion-56504.appspot.com",
  messagingSenderId: "210997447803",
  appId: "1:210997447803:web:1381f032bc6a51ef0966de",
  measurementId: "G-92YRYMHGDC"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
