// Ativa os menus suspensos ao passar o mouse
document.querySelectorAll('.dropdown').forEach(menu => {
    menu.addEventListener('mouseenter', () => {
        menu.querySelector('.submenu').style.display = 'block';
    });
    menu.addEventListener('mouseleave', () => {
        menu.querySelector('.submenu').style.display = 'none';
    });
});
