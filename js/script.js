import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBk1sihrx8Zdj5yQ-eb82nc0TFHUG865IQ",
  authDomain: "hyperworks-studios.firebaseapp.com",
  projectId: "hyperworks-studios",
  storageBucket: "hyperworks-studios.firebasestorage.app",
  messagingSenderId: "458793278158",
  appId: "1:458793278158:web:3b4e04750c5658b215ce9f",
  measurementId: "G-Y5R259CL1V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("login-btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Bem-vindo, ${result.user.displayName}!`);
        })
        .catch((error) => {
            console.error("Erro no login:", error);
        });
});
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            this.querySelector(".submenu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function() {
            this.querySelector(".submenu").style.display = "none";
        });
    });
});
