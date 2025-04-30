// script.js

// Smooth scroll para os links do menu
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animação de clique no botão de compra
const buyButton = document.querySelector('.buy-button');
if (buyButton) {
  buyButton.addEventListener('click', () => {
    buyButton.textContent = 'Reservado!';
    buyButton.style.backgroundColor = '#888';
    buyButton.disabled = true;
    setTimeout(() => {
      buyButton.textContent = 'Reservar Agora';
      buyButton.style.backgroundColor = 'gold';
      buyButton.disabled = false;
    }, 3000);
  });
}

// Animação no envio do formulário de contato
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
}
