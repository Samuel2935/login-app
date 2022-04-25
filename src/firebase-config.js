
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth' ;         

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEn16pImYZExgW-mCZUxGSqSWGK7VANpg",
  authDomain: "log-reg-app-f8b34.firebaseapp.com",
  projectId: "log-reg-app-f8b34",
  storageBucket: "log-reg-app-f8b34.appspot.com",
  messagingSenderId: "631820444319",
  appId: "1:631820444319:web:9f3b3d3a9da83f704ef8aa"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();