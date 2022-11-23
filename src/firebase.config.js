// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJRNNh8fGVnNM66VMZ2Wj42Iz4t3pIYI",
  authDomain: "bookrestore-3a0a6.firebaseapp.com",
  projectId: "bookrestore-3a0a6",
  storageBucket: "bookrestore-3a0a6.appspot.com",
  messagingSenderId: "582183481575",
  appId: "1:582183481575:web:97a51860388faa36f97242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;