// Script para abrir e fechar o dropdown menu ao clicar
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Impede que o clique feche automaticamente o menu
            let dropdownMenu = this.querySelector(".dropdown-menu");
            
            // Fecha todos os menus antes de abrir um novo
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = "none";
                }
            });

            // Alterna a exibição do menu clicado
            dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
        });
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener("click", function() {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.style.display = "none";
        });
    });
});
