document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector("a");
        const submenu = dropdown.querySelector(".submenu");

        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Fecha todos os submenus antes de abrir o atual
            document.querySelectorAll(".submenu").forEach((menu) => {
                if (menu !== submenu) {
                    menu.classList.remove("active");
                }
            });

            // Ativa/desativa o submenu atual
            submenu.classList.toggle("active");
        });
    });

    // Fecha os submenus ao clicar fora
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".submenu").forEach((menu) => {
                menu.classList.remove("active");
            });
        }
    });
});
