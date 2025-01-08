// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo1t6SQF0OAtTfLOqUShd1tj18eI93z-w",
  authDomain: "twitter-clone-a33af.firebaseapp.com",
  projectId: "twitter-clone-a33af",
  storageBucket: "twitter-clone-a33af.firebasestorage.app",
  messagingSenderId: "164786318396",
  appId: "1:164786318396:web:ea00a8382f099e3e5da739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

//google sağlayıcısının kurulumu

export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);

// medya depolama alanının referansını al
export const storage = getStorage(app);
