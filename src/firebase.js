import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage, ref} from 'firebase/storage';





const firebaseConfig = {
  apiKey: "AIzaSyBvarlzc3GD1kZcTSz5TjQjlG5VCRYdYXc",
  authDomain: "login-commission.firebaseapp.com",
  projectId: "login-commission",
  storageBucket: "login-commission.appspot.com",
  messagingSenderId: "915945524737",
  appId: "1:915945524737:web:9079fcbd786c962589fa00"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app


// export var admin = require("firebase-admin");

// var serviceAccount = require("./loginsystem-6bf01-firebase-adminsdk-efnhn-53a6738f04.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
