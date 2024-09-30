// config/logion.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ01MSX3N1tBeUEXGZh6Dsa0kIwkn0j0M",
  authDomain: "studynexe.firebaseapp.com",
  projectId: "studynexe",
  storageBucket: "studynexe.appspot.com",
  messagingSenderId: "833033537537",
  appId: "1:833033537537:web:9c44199f4554b6a2c1d800",
  measurementId: "G-0YDT5EM41E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export the initialized instances
export { auth, app };
