import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5MtFpFwaj2KiKSZzYD1X2QONbTfTQ3Mw",
  authDomain: "smartqueueai-fea8b.firebaseapp.com",
  projectId: "smartqueueai-fea8b",
  storageBucket: "smartqueueai-fea8b.firebasestorage.app",
  messagingSenderId: "82005767218",
  appId: "1:82005767218:web:6328d7d88b1223839ef82b",
  measurementId: "G-WEM2CEKRST"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;