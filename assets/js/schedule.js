// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos do Formulário
    const formReserva = document.getElementById('hotel-form');
    const campoCheckin = document.getElementById('checkin');
    const campoCheckout = document.getElementById('checkout');
    const campoHospedes = document.getElementById('hospedes');
    const areaResultados = document.getElementById('results-area');

    // 2. Base de Dados de Exemplo
    const baseQuartos = [
        { nome: "Quarto Deluxe", capacidade: 2, precoDiaria: 500, img: "assets/images/room/pexels-pixabay-279746.jpg" },
        { nome: "Quarto Premium", capacidade: 4, precoDiaria: 850, img: "assets/images/room/pexels-jonathanborba-30708771.jpg" },
        { nome: "Suíte Master", capacidade: 10, precoDiaria: 1500, img: "assets/images/room/pexels-pixabay-271643.jpg" }
    ];

    // 3. Lógica de Datas (Bloqueio)
    const hoje = new Date().toISOString().split('T')[0];
    campoCheckin.setAttribute('min', hoje);

    campoCheckin.addEventListener('change', () => {
        campoCheckout.setAttribute('min', campoCheckin.value);
    });

    // 4. Lógica de Busca
    formReserva.addEventListener('submit', (event) => {
        event.preventDefault();

        const dataInicio = new Date(campoCheckin.value);
        const dataFim = new Date(campoCheckout.value);

        const diferencaTempo = Math.abs(dataFim - dataInicio);
        const totalNoites = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
        const noites = totalNoites > 0 ? totalNoites : 1;

        areaResultados.innerHTML = "";
        const qtdDesejada = parseInt(campoHospedes.value);
        const disponiveis = baseQuartos.filter(q => q.capacidade >= qtdDesejada);

        if (disponiveis.length === 0) {
            areaResultados.innerHTML = "<p class='error-msg'>Nenhum quarto disponível para esta quantidade de hóspedes.</p>";
            return;
        }

        disponiveis.forEach(quarto => {
            const valorTotal = quarto.precoDiaria * noites;

            areaResultados.innerHTML += `
            <div class="resultado-card">
                <img src="${quarto.img}" alt="${quarto.nome}" class="resultado-img">
                <div class="resultado-info">
                    <h4>${quarto.nome}</h4>
                    <p>Check-in: ${campoCheckin.value.split('-').reverse().join('/')}</p>
                    <p>Check-out: ${campoCheckout.value.split('-').reverse().join('/')}</p>
                    <h3 class="preco-total">Total: R$ ${valorTotal.toLocaleString('pt-BR')}</h3>
                    
                    <button class="btn btn-reservar" 
                            data-nome="${quarto.nome}" 
                            data-total="${valorTotal}" 
                            data-noites="${noites}">
                        Reservar Agora
                    </button>
                </div>
            </div>`;
        });
    });

    // 5. O VIGIA (Agora dentro do DOMContentLoaded para ter acesso à areaResultados)
    areaResultados.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-reservar')) {
            const botao = event.target;

            const dadosReserva = {
                quarto: botao.getAttribute('data-nome'),
                total: botao.getAttribute('data-total'),
                noites: botao.getAttribute('data-noites'),
                checkin: campoCheckin.value.split('-').reverse().join('/'),
                checkout: campoCheckout.value.split('-').reverse().join('/')
            };

            // Salva a reserva e envia para o Login
            localStorage.setItem('reservaAtiva', JSON.stringify(dadosReserva));
            window.location.href = 'login.html';
        }
    });

}); // Fim do DOMContentLoaded