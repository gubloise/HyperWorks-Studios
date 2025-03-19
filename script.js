import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "SUA-API-KEY",
    authDomain: "SEU-DOMÍNIO.firebaseapp.com",
    projectId: "SEU-PROJECT-ID",
    storageBucket: "SEU-BUCKET.appspot.com",
    messagingSenderId: "SEU-SENDER-ID",
    appId: "SEU-APP-ID"
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
