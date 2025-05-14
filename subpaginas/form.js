document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar campos
    let isValid = true;
    const nombre = document.getElementById('nombre').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    
    // Validación nombre
    if (nombre === '') {
        document.getElementById('nombreError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('nombreError').classList.add('hidden');
    }
    
    // Validación número
    if (numero === '' || !/^\d{8,15}$/.test(numero)) {
        document.getElementById('numeroError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('numeroError').classList.add('hidden');
    }
    
    // Validación correo
    if (correo === '' || !/\S+@\S+\.\S+/.test(correo)) {
        document.getElementById('correoError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('correoError').classList.add('hidden');
    }
    
    // Validación comentario
    if (comentario === '') {
        document.getElementById('comentarioError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('comentarioError').classList.add('hidden');
    }
    
    if (isValid) {
        // Mostrar confirmación
        document.getElementById('confirmacion').classList.remove('hidden');
        
        // Reset form
        this.reset();
        
        // Ocultar confirmación 
        setTimeout(function() {
            document.getElementById('confirmacion').classList.add('hidden');
        }, 3000);
    }
});