// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1k3vMvPt3Rqi8JgAl56DrO82vXn3WbAo",
  authDomain: "nicrm-1afa3.firebaseapp.com",
  projectId: "nicrm-1afa3",
  storageBucket: "nicrm-1afa3.firebasestorage.app",
  messagingSenderId: "1087524542055",
  appId: "1:1087524542055:web:90fbb2dd08aa085f2566c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
