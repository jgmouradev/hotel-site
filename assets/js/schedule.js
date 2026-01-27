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

    // 4. Lógica de Busca (O CORAÇÃO DO PROBLEMA)
    formReserva.addEventListener('submit', (event) => {
        // MUITO IMPORTANTE: Impede o navegador de atualizar a página
        event.preventDefault();

        // 1. Converter strings de data em objetos Date reais
    const dataInicio = new Date(campoCheckin.value);
    const dataFim = new Date(campoCheckout.value);

    // 2. Calcular a diferença em milissegundos e converter para dias
    // Usamos Math.ceil para garantir dias inteiros
    const diferencaTempo = Math.abs(dataFim - dataInicio);
    const totalNoites = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    // Garantir que seja pelo menos 1 noite
    const noites = totalNoites > 0 ? totalNoites : 1;

    areaResultados.innerHTML = "";
    const qtdDesejada = parseInt(campoHospedes.value);
    const disponiveis = baseQuartos.filter(q => q.capacidade >= qtdDesejada);

    disponiveis.forEach(quarto => {
        const valorTotal = quarto.precoDiaria * noites;

        areaResultados.innerHTML += `
            <div class="resultado-card">
                <img src="${quarto.img}" alt="${quarto.nome}" class="resultado-img">
                <div class="resultado-info">
                    <h4>${quarto.nome}</h4>
                    <p><strong>Estadia:</strong> ${noites} noite(s)</p>
                    <p>Check-in: ${campoCheckin.value.split('-').reverse().join('/')}</p>
                    <p>Check-out: ${campoCheckout.value.split('-').reverse().join('/')}</p>
                    
                    <div class="preco-container">
                        <span class="preco-diaria">R$ ${quarto.precoDiaria} / noite</span>
                        <h3 class="preco-total">Total: R$ ${valorTotal.toLocaleString('pt-BR')}</h3>
                    </div>

                    <button class="btn">Confirmar Reserva</button>
                </div>
            </div>`;
    });
});
});