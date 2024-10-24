document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    const errores = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push('El correo electrónico no es válido.');
    }

    const telefonoRegex = /^[0-9]{7,15}$/;
    if (!telefonoRegex.test(telefono)) {
        errores.push('El número de teléfono no es válido.');
    }

    if (mensaje.length < 10) {
        errores.push('El mensaje debe tener al menos 10 caracteres.');
    }

    if (errores.length > 0) {
        mostrarErrores(errores); 
        document.getElementById('resultado').innerHTML = ''; 
    } else {
        mostrarResultado(email, telefono, mensaje); 
        document.getElementById('errores').innerHTML = ''; 
        document.getElementById('contactForm').reset();
    }
});

function mostrarErrores(errores) {
    const divErrores = document.getElementById('errores');
    divErrores.innerHTML = ''; 

    errores.forEach(error => {
        const p = document.createElement('p');
        p.textContent = error;
        p.style.color = 'red'; 
        divErrores.appendChild(p);
    });
}

function mostrarResultado(email, telefono, mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    const pEmail = document.createElement('p');
    pEmail.textContent = `Correo: ${email}`;
    pEmail.style.color = 'green';
    
    const pTelefono = document.createElement('p');
    pTelefono.textContent = `Teléfono: ${telefono}`;
    pTelefono.style.color = 'green';
    
    const pMensaje = document.createElement('p');
    pMensaje.textContent = `Mensaje: ${mensaje}`;
    pMensaje.style.color = 'green'; 

    resultadoDiv.appendChild(pEmail);
    resultadoDiv.appendChild(pTelefono);
    resultadoDiv.appendChild(pMensaje);
}
