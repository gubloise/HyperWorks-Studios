document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-links li");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            const dropdown = this.querySelector(".dropdown");
            
            // Fecha todos os dropdowns antes de abrir um novo
            document.querySelectorAll(".dropdown").forEach((d) => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                }
            });

            // Alterna o dropdown clicado
            if (dropdown) {
                dropdown.classList.toggle("active");
            }
        });
    });

    // Fecha os dropdowns ao clicar fora
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-links li")) {
            document.querySelectorAll(".dropdown").forEach((d) => {
                d.classList.remove("active");
            });
        }
    });
});

