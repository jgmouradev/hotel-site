document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção de Elementos
    const loginForm = document.getElementById('login-form');
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');
    const loginBox = document.querySelector('.login-box');

    // 2. Lógica do Alerta de Reserva Pendente
    const reservaPendente = localStorage.getItem('reservaAtiva');
    if (reservaPendente && loginBox) {
        const alerta = document.createElement('div');
        alerta.className = 'alerta-reserva';
        alerta.innerHTML = `
            <i class="fa-solid fa-circle-info"></i>
            <span>Para continuar sua reserva, por favor identifique-se.</span>
        `;
        loginForm.parentNode.insertBefore(alerta, loginForm);
    }

    // 3. Mostrar/Esconder Senha (dentro do escopo correto)
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alterna as classes do ícone profissional
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // 4. Processamento do Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulação de credenciais (ajuste conforme sua preferência)
        if (email === "admin@paradise.com" && password === "123456") {
            
            // Guardamos o nome para o Dashboard
            localStorage.setItem('nomeUsuario', "Ricardo Pereira");

            // Esta linha apaga a reserva selecionada anteriormente
            localStorage.removeItem('reservaAtiva');

            // Redirecionamento Inteligente
            if (reservaPendente) {
                // Se o cliente clicou em "Reservar" antes, vai para o checkout
                window.location.href = "dashboard.html";
            } else {
                // Se entrou direto no login, vai para o dashboard
                window.location.href = "checkout.html";
            }
            
        } else {
            alert("E-mail ou palavra-passe incorretos. Tente: admin@paradise.com | 123456");
        }
    });
});