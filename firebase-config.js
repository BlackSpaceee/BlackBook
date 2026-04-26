// ============================================================
// BlackBook — Firebase 設定（共用）
// ============================================================
// 載入方式：在 HTML 中加入
// <script type="module" src="firebase-config.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-Zn8LuljGWPnHtC5KGlfRnwBSIF98Wg8",
  authDomain: "blackbook-2c752.firebaseapp.com",
  projectId: "blackbook-2c752",
  storageBucket: "blackbook-2c752.firebasestorage.app",
  messagingSenderId: "439618807025",
  appId: "1:439618807025:web:548cd7b33ff2a6a98ff550",
  measurementId: "G-N660TMNJFQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// 暴露給全域使用
window.bbAuth = {
  auth, db, googleProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  doc, setDoc, getDoc, updateDoc, serverTimestamp
};
window.dispatchEvent(new Event('firebaseReady'));
