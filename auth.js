import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// 🔹 Firebase config (tumhara hi)
const firebaseConfig = {
  apiKey: "AIzaSyD1MuEuu5PSID0DSSFuiWFwkn5tsPneMPE",
  authDomain: "taskvault1-388d9.firebaseapp.com",
  projectId: "taskvault1-388d9",
  storageBucket: "taskvault1-388d9.firebasestorage.app",
  messagingSenderId: "372786010926",
  appId: "1:372786010926:web:d0514edbfddd67f96638bf"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 HTML elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

// 🔹 Signup
document.getElementById("signupBtn").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "Signup successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch((err) => {
      msg.style.color = "red";
      msg.innerText = err.message;
    });
});

// 🔹 Login
document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch((err) => {
      msg.style.color = "red";
      msg.innerText = err.message;
    });
});     



