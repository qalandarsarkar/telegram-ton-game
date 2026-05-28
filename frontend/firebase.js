import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwO8S7WhFcdXYXJFj680lHJBHO8Z4Xut8",
  authDomain: "ton-tap-empire.firebaseapp.com",
  databaseURL: "https://ton-tap-empire-default-rtdb.firebaseio.com",
  projectId: "ton-tap-empire",
  storageBucket: "ton-tap-empire.firebasestorage.app",
  messagingSenderId: "385313563144",
  appId: "1:385313563144:web:4ba025ba7226b0025ee7bd",
  measurementId: "G-X8091BMTRC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
};