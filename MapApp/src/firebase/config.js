import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  databaseURL: "https://js214-39fe9-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyCpPLbQjJHR-2YVNz6YgrvnpLHP-FmITC8", 
  authDomain: "js214-39fe9.firebaseapp.com",
  projectId: "js214-39fe9",
  storageBucket: "js214-39fe9.appspot.com",
  messagingSenderId: "67714343563",
  appId: "1:67714343563:web:aa33e00cb89734a1c9ea8e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;



