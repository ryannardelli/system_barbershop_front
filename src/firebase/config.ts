import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBDhDNrct6_WSJnlJX0_7RJVnIrKvoWbxI",
//   authDomain: "barbershop-db23a.firebaseapp.com",
//   projectId: "barbershop-db23a",
//   storageBucket: "barbershop-db23a.firebasestorage.app",
//   messagingSenderId: "1094386125706",
//   appId: "1:1094386125706:web:c4c3644d81dec25d289673",
//   measurementId: "G-7TPGTRCJCR"
// };

const app = initializeApp(firebaseConfig);

export default app;
