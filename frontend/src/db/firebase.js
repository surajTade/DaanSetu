import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize auth properly
const db = getFirestore(app);

// Define collections AFTER db initialization
const ngoCollection = collection(db, "ngo");
const ngoRequirementsCollection = collection(db, "ngo-requirements");

// ✅ Export auth correctly
export { app, auth, db, ngoCollection, ngoRequirementsCollection };
