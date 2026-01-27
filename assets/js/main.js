 // --- ANIMAÇÕES COM SCROLLREVEAL ---

      // 1. Inicializa o ScrollReveal com configurações padrão
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "60px",
        duration: 1800,
        delay: 200,
        // reset: true // Descomente para re-animar a cada vez que rolar
      });

      // 2. Define as animações para cada seção
      // Atraso (delay) para a animação do Hero
      sr.reveal(".hero-content", { origin: "top", duration: 2000, delay: 400 });

      // Anima o título de cada seção
      sr.reveal(".section-title");

      // Anima os cards dos quartos com um intervalo entre eles (efeito cascata)
      sr.reveal(".quarto-card", { interval: 200 });

      // Anima a galeria de imagens
      sr.reveal(".galeria-item", { interval: 100 });

      // Anima o formulário de reserva
      sr.reveal(".reserva-form", { origin: "top" });

     
     
     
      // Documentação: Bloqueio de datas passadas
function configurarCalendarios() {
    const campoCheckin = document.getElementById('checkin');
    const campoCheckout = document.getElementById('checkout');

    // 1. Obter a data de hoje no formato YYYY-MM-DD
    const hoje = new Date().toISOString().split('T')[0];

    // 2. Definir que a data mínima para check-in é hoje
    campoCheckin.setAttribute('min', hoje);

    // 3. Atualizar dinamicamente o check-out conforme o check-in muda
    campoCheckin.addEventListener('change', function() {
        const dataSelecionada = this.value;
        
        if (dataSelecionada) {
            // O check-out deve ser pelo menos 1 dia após o check-in
            let proximoDia = new Date(dataSelecionada);
            proximoDia.setDate(proximoDia.getDate() + 1);
            
            const minCheckout = proximoDia.toISOString().split('T')[0];
            
            campoCheckout.setAttribute('min', minCheckout);
            
            // Se o utilizador já tinha escolhido um checkout inválido, limpa o campo
            if (campoCheckout.value && campoCheckout.value < minCheckout) {
                campoCheckout.value = "";
            }
        }
    });
}

// Executar a função ao carregar a página
window.onload = configurarCalendarios;

// --- LÓGICA DE SIMULAÇÃO DE RESERVA ---

const formReserva = document.getElementById('hotel-form');
const areaResultados = document.getElementById('results-area');

// Simulando uma "base de dados" de quartos
const quartosDisponiveis = [
    { nome: "Quarto Deluxe", capacidade: 2, preco: "R$ 500" },
    { nome: "Quarto Premium", capacidade: 4, preco: "R$ 850" },
    { nome: "Suíte Master", capacidade: 6, preco: "R$ 1500" }
];

formReserva.addEventListener('submit', function(event) {
    // 1. Impede a página de recarregar
    event.preventDefault();

    // 2. Captura os valores atuais do formulário
    const numHospedes = parseInt(document.getElementById('hospedes').value);
    
    // 3. Limpa os resultados anteriores para a nova consulta
    areaResultados.innerHTML = "";

    // 4. Filtra os quartos que suportam o número de hóspedes
    const filtrados = quartosDisponiveis.filter(quarto => quarto.capacidade >= numHospedes);

    // 5. Gera o HTML dos resultados
    if (filtrados.length > 0) {
        areaResultados.innerHTML = "<h3>Quartos Disponíveis:</h3>";
        filtrados.forEach(quarto => {
            areaResultados.innerHTML += `
                <div class="resultado-item" style="border: 1px solid #ccc; margin: 10px 0; padding: 10px;">
                    <strong>${quarto.nome}</strong> - Capacidade: até ${quarto.capacidade} pessoas.
                    <p>Preço estimado: ${quarto.preco}/noite</p>
                </div>
            `;
        });
    } else {
        areaResultados.innerHTML = "<p style='color: red;'>Desculpe, não temos quartos para essa quantidade de hóspedes.</p>";
    }
});