
    // Desplazamiento suave al hacer clic en los enlaces de navegación
    const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});