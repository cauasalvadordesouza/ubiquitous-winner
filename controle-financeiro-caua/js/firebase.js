import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDN5Ovu7wQufDfJOuyz9-1hc5PkQgUtqg",
  authDomain: "caua-57fce.firebaseapp.com",
  projectId: "caua-57fce",
  storageBucket: "caua-57fce.firebasestorage.app",
  messagingSenderId: "632258039660",
  appId: "1:632258039660:web:47fa7d256fc7e2daf06d49"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
