// Garantir que os menus abrem apenas quando necessário
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", function () {
            const submenu = this.querySelector(".submenu");
            submenu.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            const submenu = this.querySelector(".submenu");
            submenu.style.display = "none";
        });
    });
});
