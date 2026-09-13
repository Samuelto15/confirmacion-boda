document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('weddingCard');
    const formsBtn = document.getElementById('formsBtn');

    // Apertura y cierre de la tarjeta
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });

    // Evita que hacer clic en el botón active el cierre
    if (formsBtn) {
        formsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});