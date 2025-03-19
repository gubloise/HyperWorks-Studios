import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBk1sihrx8Zdj5yQ-eb82nc0TFHUG865IQ",
  authDomain: "hyperworks-studios.firebaseapp.com",
  projectId: "hyperworks-studios",
  storageBucket: "hyperworks-studios.firebasestorage.app",
  messagingSenderId: "458793278158",
  appId: "1:458793278158:web:3b4e04750c5658b215ce9f",
  measurementId: "G-Y5R259CL1V"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função de login
document.getElementById("login-btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Usuário logado:", result.user);
            window.location.href = "dashboard.html"; // Redireciona após login
        })
        .catch((error) => console.error("Erro no login:", error));
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        console.log("Usuário deslogado");
        window.location.href = "index.html";
    }).catch((error) => console.error("Erro ao deslogar:", error));
});
