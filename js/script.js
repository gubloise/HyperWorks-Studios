document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            this.querySelector(".submenu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function() {
            this.querySelector(".submenu").style.display = "none";
        });
    });

    // Mensagem no console para testar se o JS tá carregando
    console.log("JavaScript carregado com sucesso!");
});
