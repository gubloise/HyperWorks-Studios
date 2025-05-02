// Scroll suave para âncoras (opcional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Menu futuro
const menuBtn = document.querySelector(".btn-menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    alert("Menu completo será implementado em breve.");
  });
}
