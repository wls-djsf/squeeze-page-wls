<!-- Script JavaScript para envio assíncrono (Evita a tela preta) -->
    <script>
        const form = document.getElementById('form-squeeze');
        const mensagemSucesso = document.getElementById('mensagem-sucesso');

        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Impede o navegador de abrir a tela preta padrão

            const formData = new FormData(form);
            const actionUrl = "https://9e2d51a1.sibforms.com/serve/MUIFAALIGzIY4HLL6YZ79OfaaF0dst7v09AF4Hk0CLmSHjGFqLecL8jH_1mvf4C7u--6KbiNdurd_EuIZ4dMryC0z6mWEENBc_EEjP9UPSqeceXjlmkwvhO0U8JSP8lYjiOXHmrFVlK_gFnUfLSL3MB788fRHSp1Hmzj9UTunIQrscaBfMQJaonnQC_xKYpPGoOMuy5p-bqFL-xTfw==";

            try {
                const response = await fetch(actionUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Necessário para aceitar o redirecionamento de cross-origin do Brevo
                });

                // Como usamos no-cors, ocultamos o form e exibimos a mensagem de aviso personalizada
                form.style.display = 'none';
                mensagemSucesso.style.display = 'block';

            } catch (error) {
                alert('Ocorreu um erro ao enviar. Tente novamente.');
                console.h(error);
            }
        });
    </script>
