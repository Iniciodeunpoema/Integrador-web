const form = document.getElementById('contactForm');
const resultadoDiv = document.getElementById('resultado');
const erroresDiv = document.getElementById('errores');

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); 


    resultadoDiv.innerHTML = '';
    erroresDiv.innerHTML = '';

    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    const errores = [];


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errores.push('El correo electrónico no es válido.');
    }


    const regexTelefono = /^\d{10}$/; 
    if (!regexTelefono.test(telefono)) {
        errores.push('El teléfono debe tener 10 dígitos.');
    }


    if (mensaje.length < 10) {
        errores.push('El mensaje debe tener al menos 10 caracteres.');
    }


    if (errores.length > 0) {
        errores.forEach(function (error) {
            const p = document.createElement('p');
            p.textContent = error;
            p.style.color = 'red'; 
            erroresDiv.appendChild(p);
        });
        return; 
    }


    const emailP = document.createElement('p');
    emailP.textContent = `Correo: ${email}`;
    emailP.style.textAlign = 'center'; 

    const telefonoP = document.createElement('p');
    telefonoP.textContent = `Teléfono: ${telefono}`;
    telefonoP.style.textAlign = 'center'; 

    const mensajeP = document.createElement('p');
    mensajeP.textContent = `Mensaje: ${mensaje}`;
    mensajeP.style.textAlign = 'center'; 

    resultadoDiv.appendChild(emailP);
    resultadoDiv.appendChild(telefonoP);
    resultadoDiv.appendChild(mensajeP);
});
