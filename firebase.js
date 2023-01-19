// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAs7H3Tu-z4jHJ7K2U5k8sGwTN7P-oN0As",
  authDomain: "pumppal-c3036.firebaseapp.com",
  projectId: "pumppal-c3036",
  storageBucket: "pumppal-c3036.appspot.com",
  messagingSenderId: "952265213408",
  appId: "1:952265213408:web:e5395db5d92c5175931785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);