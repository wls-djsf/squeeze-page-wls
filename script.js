const form = document.getElementById('form-squeeze');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function() {
    // Dá um breve instante para o envio disparar para o iframe e atualiza a interface
    setTimeout(() => {
        form.style.display = 'none';
        mensagemSucesso.style.display = 'block';
    }, 300);
});
