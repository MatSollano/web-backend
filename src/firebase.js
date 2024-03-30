// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'; // Import getDatabase from firebase/database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1c9ZmMKFnUiHS2WkySJOD5Db7fhEKQMg",
  authDomain: "login-admin-2ae45.firebaseapp.com",
  projectId: "login-admin-2ae45",
  storageBucket: "login-admin-2ae45.appspot.com",
  messagingSenderId: "584823650957",
  appId: "1:584823650957:web:8fe489cda9f826cd9100c4",
  measurementId: "G-54ZZQYP997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize the Realtime Database

const auth = getAuth(app);

export { auth, database };
export default app;
