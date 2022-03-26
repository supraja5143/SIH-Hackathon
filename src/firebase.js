import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5BvvxoXCSChKznmDTviJNyM3LyjITLiU",
  authDomain: "ecommerce-46735.firebaseapp.com",
  projectId: "ecommerce-46735",
  storageBucket: "ecommerce-46735.appspot.com",
  messagingSenderId: "549522930565",
  appId: "1:549522930565:web:24fd0756479946303a22ec",
  measurementId: "G-9GWD2P7DJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
//export default storage;
export  {
    storage, firebase,db as default
  }
//export default db;