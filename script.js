document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('weddingCard');
    const formsBtn = document.getElementById('formsBtn');
    const hint = document.getElementById('hint');

    // Control de apertura y cierre
    card.addEventListener('click', () => {
        const isOpen = card.classList.toggle('open');
        
        // Oculta la ayuda visual una vez que el usuario ya sabe abrirla
        if (isOpen && hint) {
            hint.style.display = 'none';
        }
    });

    // Acción del botón de confirmación
    if (formsBtn) {
        formsBtn.addEventListener('click', (e) => {
            // Evita que hacer clic en el botón cierre la tarjeta
            e.stopPropagation();

            // Efecto festivo de confeti al confirmar
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 60,
                    spread: 60,
                    origin: { y: 0.7 },
                    colors: ['#d4af37', '#e8e1d5', '#2c2c2c']
                });
            }
        });
    }
});