// Simulação de envio de doação
const form = document.getElementById('donation-form');
const mensagem = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // impede o recarregamento da página
  mensagem.hidden = false; // mostra a mensagem de sucesso
  form.reset(); // limpa o formulário
});
