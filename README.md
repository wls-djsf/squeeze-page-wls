# 🚀 Squeeze Page WLS

<a href="https://wls-djsf.github.io/squeeze-page-wls/" target="_blank">
  <img src="https://img.shields.io/badge/🔗_Ver_Projeto_Online-00C853?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Ver Projeto Online">
</a>

> Uma Squeeze Page moderna, limpa e responsiva, desenvolvida do zero com foco em conversão, UI/UX e boas práticas de estruturação web, integrada de forma assíncrona com o serviço de automação Brevo.

---

## 💻 Sobre o Projeto

Este projeto é uma Squeeze Page (página de captura de e-mails em tela única), construída para eliminar distrações e guiar o utilizador diretamente para a tomada de decisão (Call to Action). O layout foi desenhado em Light Mode, utilizando uma paleta de cores equilibrada, sombras suaves e proporções focadas na experiência do utilizador.

---

## 🛠️ Tecnologias e Conceitos Utilizados

* **HTML5 Semântico:** Estruturação correta das tags (`<main>`, `<div>`, `<form>`, `<input>`, `<button>`, `<iframe>`).
* **CSS3 Moderno:** 
  * **Flexbox:** Utilizado para centralização de elementos e alinhamento do formulário (input e botão lado a lado).
  * **Viewport Units (`vh` / `vw`):** Fixação estrutural na altura e largura total da tela sem barras de rolagem indesejadas.
  * **Media Queries:** Responsividade fluida adaptada para dispositivos móveis (smartphones).
* **JavaScript (Vanilla):** Manipulação de eventos do DOM para atualizar dinamicamente a interface do utilizador após a submissão do formulário.
* **Integração Backend (Brevo):** Submissão de dados via formulário HTML direcionado a um iframe oculto, garantindo a captura dos contactos sem redirecionamentos indesejados ou telas pretas de resposta.
* **Git & GitHub:** Versionamento de código e hospedagem contínua via GitHub Pages.

---

## ✨ Funcionalidades e UX (Experiência do Utilizador)

* **Captura de Leads Direta:** Os e-mails inseridos são enviados de forma segura para a base de dados do Brevo.
* **Feedback Dinâmico na Mesma Página:** Ao submeter o e-mail, o formulário desaparece de forma fluida e revela uma mensagem de sucesso personalizada.
* **Avisos de Segurança:** Inclui alertas explícitos orientando o utilizador a verificar as caixas de Spam ou Lixeira caso o e-mail duplo de confirmação não apareça na caixa de entrada principal.

---

## 📂 Estrutura de Ficheiros

```text
📁 squeeze-page-wls/
├── 📄 index.html    # Estrutura principal, formulário e iframe oculto
├── 🎨 style.css     # Estilização completa, Flexbox, componentes e responsividade
├── 📜 script.js     # Lógica de manipulação de exibição da mensagem de sucesso
└── 🖼️ image.png     # Logotipo e identidade visual da aplicação
