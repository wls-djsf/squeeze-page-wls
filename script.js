const form = document.getElementById('form-squeeze');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function() {
    // Dá um micro-segundo para o iframe processar o envio e oculta o form mostrando o sucesso
    setTimeout(() => {
        form.style.display = 'none';
        mensagemSucesso.style.display = 'block';
    }, 400);
});
