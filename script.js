const form = document.getElementById('form-squeeze');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const iframe = document.getElementById('hidden-iframe');

form.addEventListener('submit', function() {
    // Aguarda um instante para o envio processar no iframe oculto e altera a interface localmente
    setTimeout(() => {
        form.style.display = 'none';
        mensagemSucesso.style.display = 'block';
    }, 500); // Meio segundo de atraso garante a fluidez do envio
});
