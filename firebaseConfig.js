import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyATrvaRLEffwdWMbe2JYopE8q6zV9REhcg",
  authDomain: "sue-gallery-401811.firebaseapp.com",
  projectId: "sue-gallery-401811",
  storageBucket: "sue-gallery-401811.appspot.com",
  messagingSenderId: "372187860820",
  appId: "1:372187860820:web:bdf8b78bb925717e34c2c1",
  measurementId: "G-DJRMJQ940X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage()