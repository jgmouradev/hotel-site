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