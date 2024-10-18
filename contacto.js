document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Deshabilitar validación nativa del navegador
  this.setAttribute('novalidate', true);

  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;
  let resultDiv = document.getElementById('result');

  // Inicializar un array para almacenar los errores
  let errors = [];

  if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.push("Correo inválido. Asegúrate de que tenga un formato correcto (ej. usuario@dominio.com).");
  }

  if (!/^\d{10}$/.test(phone)) {
    errors.push("Teléfono inválido. Debe contener exactamente 10 dígitos.");
  }

  if (message.length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres.");
  }

  // Limpiar el área de resultados
  resultDiv.innerHTML = '';

  if (errors.length > 0) {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = `<ul><li>${errors.join('</li><li>')}</li></ul>`;
  } else {
    resultDiv.style.color = 'green'; 
    resultDiv.innerHTML = `
      <p>Datos enviados correctamente:</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `;

    // Resetear el formulario si es necesario
    this.reset();
  }
});

  