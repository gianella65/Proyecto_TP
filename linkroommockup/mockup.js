// Script interactivo para la plataforma educativa

document.addEventListener('DOMContentLoaded', function() {
    // Botón de perfil
    const profileBtn = document.getElementById('profileBtn');
    
    profileBtn.addEventListener('click', function() {
        alert('Perfil de usuario - Esta funcionalidad será implementada');
    });

    // Event listeners para botones de envío
    const submitButtons = document.querySelectorAll('.btn-primary:not(:disabled)');
    
    submitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const taskTitle = this.closest('.task-item').querySelector('h3').textContent;
            alert(`Tarea "${taskTitle}" enviada correctamente`);
        });
    });

    // Event listeners para tarjetas de clase
    const classLinks = document.querySelectorAll('.btn-secondary');
    
    classLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const className = this.closest('.card').querySelector('h2').textContent;
            console.log(`Abriendo clase: ${className}`);
        });
    });

    // Animación al hacer hover en cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.opacity = '0.95';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });

    // Sidebar activo
    const classItems = document.querySelectorAll('.class-item');
    
    classItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            classItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log('Plataforma educativa cargada correctamente');
});