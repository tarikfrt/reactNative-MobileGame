// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNP0vaPo4weRxFvkQYmDnHOE6qC_hjrno",
  authDomain: "yaz-lab2.firebaseapp.com",
  projectId: "yaz-lab2",
  storageBucket: "yaz-lab2.appspot.com",
  messagingSenderId: "106706391959",
  appId: "1:106706391959:web:73133322a6f7e15fbdaad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)     
  });

export  const db = getFirestore(app);

export default app;