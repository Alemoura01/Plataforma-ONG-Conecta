// Simula envio de mensagem de contato
const formContato = document.getElementById('contact-form');
const msgEnviada = document.getElementById('msg-enviada');

formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  msgEnviada.hidden = false;
  formContato.reset();
});
