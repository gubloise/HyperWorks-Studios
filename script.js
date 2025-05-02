// script.js

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Menu toggle (se quiser usar em mobile depois)
const menuBtn = document.querySelector(".btn-menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    alert("O menu será ativado em breve.");
  });
}
