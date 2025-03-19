console.log("Firebase carregou:", firebase.apps.length > 0);

// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configuração do Firebase (Substitua com suas credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyBk1sihrx8Zdj5yQ-eb82nc0TFHUG865IQ",
  authDomain: "hyperworks-studios.firebaseapp.com",
  projectId: "hyperworks-studios",
  storageBucket: "hyperworks-studios.firebasestorage.app",
  messagingSenderId: "458793278158",
  appId: "1:458793278158:web:3b4e04750c5658b215ce9f",
  measurementId: "G-Y5R259CL1V"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Função para login com Google
async function loginComGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Verifica se o usuário já tem um perfil no Firestore
    const userRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      // Se não existir, pede nome e foto de perfil
      const nome = prompt("Escolha seu nome de perfil:");
      if (!nome) return alert("Nome de perfil não pode estar vazio!");

      const foto = prompt("Cole o link da sua foto de perfil:");
      if (!foto) return alert("Foto de perfil não pode estar vazia!");

      // Salva no Firestore
      await setDoc(userRef, {
        nome: nome,
        email: user.email,
        fotoPerfil: foto,
        dataCriacao: new Date(),
      });
    }

    alert("Login realizado com sucesso!");
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro ao fazer login. Tente novamente.");
  }
}

// Botão de login
document.getElementById("botaoLogin").addEventListener("click", loginComGoogle);

document.getElementById("googleLogin").addEventListener("click", () => {
    console.log("Botão de login foi clicado!");
    loginGoogle();
});

