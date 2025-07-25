
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC32udZU3sDmHC2d-dm1f7uim34TBemcck",
  authDomain: "devlink-3b609.firebaseapp.com",
  projectId: "devlink-3b609",
  storageBucket: "devlink-3b609.firebasestorage.app",
  messagingSenderId: "774475294247",
  appId: "1:774475294247:web:eea2206562a3e7f04fd002"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db
};