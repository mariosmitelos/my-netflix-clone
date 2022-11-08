import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0NxazKAq4ttQzoRbmWPy-nDhQbcVVgsY",
  authDomain: "netflix-clone-b4fef.firebaseapp.com",
  projectId: "netflix-clone-b4fef",
  storageBucket: "netflix-clone-b4fef.appspot.com",
  messagingSenderId: "204005320783",
  appId: "1:204005320783:web:13d48a3b1e2ec254c5223a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
export default db;
