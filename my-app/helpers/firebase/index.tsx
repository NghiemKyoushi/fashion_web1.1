import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword , getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import {toastSuccess, toastFail} from '../../common/utils';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth();
export const createAccount = async (mail: string, password: string) => {
  try{
    await createUserWithEmailAndPassword(auth, mail, password);
    toastSuccess('👏👏👏 Register successfully!')
  }catch(e){
    toastFail('⚠️⚠️⚠️ Register fail!')
  }
}