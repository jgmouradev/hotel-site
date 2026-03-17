# 🌴 Paradise Resort - Sistema de Reserva de Estadias

O **Paradise Resort** é uma aplicação web interativa desenvolvida para simular a experiência de reserva em um hotel de luxo. O projeto foca em uma interface elegante, fluxos de usuário lógicos e persistência de dados utilizando o navegador.

## 🚀 Fluxo da Aplicação

1.  **Home:** O usuário realiza a busca de quartos por data e quantidade de hóspedes.
2.  **Filtro Dinâmico:** O sistema calcula o valor total da estadia com base nas noites selecionadas.
3.  **Login Inteligente:** Antes de confirmar, o usuário deve se identificar. O sistema reconhece se existe uma reserva pendente e personaliza a saudação.
4.  **Dashboard Personalizado:** Um painel exclusivo para o hóspede gerenciar suas pré-reservas e visualizar o histórico.
5.  **Checkout:** Simulação de pagamento com validação de campos e animação de processamento (Spinner).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização personalizada com foco em UX/UI de luxo (uso de Google Fonts e Flexbox/Grid).
* **JavaScript (Vanilla):** Lógica de manipulação do DOM, cálculos de datas e gerenciamento de estado.
* **LocalStorage:** Utilizado para persistir os dados da reserva e a sessão do usuário entre as páginas sem a necessidade de um banco de dados externo.
* **Font Awesome:** Ícones vetoriais para interface.

## 📦 Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/paradise-resort.git](https://github.com/seu-usuario/paradise-resort.git)
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência.

## 📂 Estrutura de Pastas

```text
├── assets/
│   ├── css/        # Estilos (style.css)
│   ├── js/         # Scripts (schedule.js, login.js, dashboard.js)
│   └── images/     # Fotos dos quartos e recursos visuais
├── index.html      # Página Principal
├── login.html      # Tela de Autenticação
├── checkout.html   # Finalização de Reserva
└── dashboard.html  # Painel do Hóspede
