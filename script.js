const form = document.getElementById('form-squeeze');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Corta totalmente qualquer comportamento padrão do navegador

    // Recolhe o valor do e-mail digitado
    const emailInput = form.querySelector('input[name="EMAIL"]').value;

    if (!emailInput) return;

    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(form);
    const actionUrl = form.action;

    // Dispara o envio em segundo plano sem bloquear a interface nem abrir telas
    fetch(actionUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).catch(err => {
        console.log('Envio efetuado:', err);
    });

    // Oculta o formulário instantaneamente e exibe a mensagem bonita na Squeeze Page
    form.style.display = 'none';
    mensagemSucesso.style.display = 'block';
});
