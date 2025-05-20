// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnwFPCdsUBjuzcHighSYfK4xnx6lfjFeg",
  authDomain: "hobby-hub-app-8b339.firebaseapp.com",
  projectId: "hobby-hub-app-8b339",
  storageBucket: "hobby-hub-app-8b339.firebasestorage.app",
  messagingSenderId: "293189632569",
  appId: "1:293189632569:web:fe249a8ae0eeaafa5903e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);