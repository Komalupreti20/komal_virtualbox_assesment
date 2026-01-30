
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD1MuEuu5PSID0DSSFuiWFwkn5tsPneMPE",
  authDomain: "taskvault1-388d9.firebaseapp.com",
  projectId: "taskvault1-388d9",
  storageBucket: "taskvault1-388d9.firebasestorage.app",
  messagingSenderId: "372786010926",
  appId: "1:372786010926:web:d0514edbfddd67f96638bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);

// Button click listener
const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Account created successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
