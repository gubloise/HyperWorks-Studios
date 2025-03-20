import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
  apiKey: "AIzaSyBk1sihrx8Zdj5yQ-eb82nc0TFHUG865IQ",
  authDomain: "hyperworks-studios.firebaseapp.com",
  projectId: "hyperworks-studios",
  storageBucket: "hyperworks-studios.firebasestorage.app",
  messagingSenderId: "458793278158",
  appId: "1:458793278158:web:3b4e04750c5658b215ce9f",
  measurementId: "G-Y5R259CL1V"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Elementos HTML
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userInfo = document.getElementById("user-info");

// Função de Login
loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Usuário logado:", result.user);
    })
    .catch((error) => console.error(error));
});

// Função de Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => console.log("Usuário saiu"))
    .catch((error) => console.error(error));
});

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    userInfo.innerHTML = `Logado como: ${user.displayName} <img src="${user.photoURL}" width="40" style="border-radius: 50%;">`;
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    userInfo.innerHTML = "";
  }
});
