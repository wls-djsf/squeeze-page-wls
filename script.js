const form = document.getElementById('form-squeeze');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function() {
    // Esconde o formulário imediatamente
    form.style.display = 'none';
    
    // Mostra a mensagem de sucesso na hora
    mensagemSucesso.style.display = 'block';
});
