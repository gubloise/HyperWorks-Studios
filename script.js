document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-links li");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Fecha todos os dropdowns antes de abrir um novo
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });

            // Alterna o dropdown do item clicado
            let dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "block";
            }
        });
    });

    // Fecha os dropdowns se clicar fora
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-links li")) {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });
        }
    });
});
