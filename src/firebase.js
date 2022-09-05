import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "test-41a9a.firebaseapp.com",
  projectId: "test-41a9a",
  storageBucket: "test-41a9a.appspot.com",
  messagingSenderId: "435264431386",
  appId: "1:435264431386:web:bcc57bda67cb5551cb38a3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const provider = new GoogleAuthProvider();