document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema del portafolio cargado correctamente.");
    
    // Efecto simple para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
