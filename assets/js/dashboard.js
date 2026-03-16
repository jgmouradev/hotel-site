document.addEventListener('DOMContentLoaded', () => {
    // 1. ATUALIZAR NOME DO USUÁRIO
    const nomeGuardado = localStorage.getItem('nomeUsuario');
    const spanNome = document.getElementById('user-name');

    if (nomeGuardado && spanNome) {
        spanNome.textContent = nomeGuardado;
    }

    // 2. BUSCAR RESERVA NO LOCALSTORAGE
    const listaReservas = document.getElementById('lista-reservas');
    const reservaAtiva = JSON.parse(localStorage.getItem('reservaAtiva'));

    // Criamos o array de reservas. 
    // Se quiser que apareça a mensagem de "vazio", este array deve começar vazio [].
    let reservas = [];

    // Se houver uma reserva feita agora, adicionamos ao array
    if (reservaAtiva) {
        reservas.push({
            quarto: reservaAtiva.quarto,
            checkin: reservaAtiva.checkin,
            checkout: reservaAtiva.checkout,
            status: "Confirmada"
        });
    }

    // 3. LÓGICA DE EXIBIÇÃO: SE ESTIVER VAZIO OU TIVER RESERVA
    if (reservas.length === 0) {
        // HTML PARA LISTA VAZIA
        listaReservas.innerHTML = `
            <div class="sem-reserva-card" style="grid-column: 1/-1; text-align: center; padding: 50px 20px; border: 2px dashed #d4af37; border-radius: 15px; background: #fff; width: 100%;">
                <i class="fa-solid fa-calendar-xmark" style="font-size: 3rem; color: #d4af37; margin-bottom: 20px; display: block;"></i>
                <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: #333;">Você ainda não tem nenhuma pré-reserva.</h2>
                <p style="color: #666; margin-bottom: 25px;">O seu próximo momento de paz está a apenas alguns cliques de distância.</p>
                <a href="index.html" class="btn" style="padding: 10px 30px; text-decoration: none; display: inline-block; background: #d4af37; color: #fff; border-radius: 5px;">Explorar o Resort</a>
            </div>
        `;
    } else {
        // HTML PARA QUANDO HÁ RESERVAS
        listaReservas.innerHTML = reservas.map(res => `
            <div class="reserva-item" style="padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-left: 5px solid #d4af37; margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; font-size: 1.2rem; color: #333;">${res.quarto}</h4>
                <p style="margin: 5px 0;"><strong>De:</strong> ${res.checkin}</p>
                <p style="margin: 5px 0;"><strong>Até:</strong> ${res.checkout}</p>
                <span style="display: inline-block; margin-top: 10px; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; background: #fdfaf3; color: #d4af37; font-weight: bold;">
                    ${res.status}
                </span>
            </div>
        `).join('');
    }
});