const imagenes = ['1.jpg', '2.jpg', '3.jpg', ]; 
  
  let indiceActual = 0;
  
  const imagenCarrusel = document.getElementById('imagenCarrusel');
  const anteriorButton = document.getElementById('anterior');
  const siguienteButton = document.getElementById('siguiente');
  
  function actualizarImagen() {
    imagenCarrusel.src = imagenes[indiceActual];
  }
  
  siguienteButton.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length; 
    actualizarImagen();
  });
  
  anteriorButton.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
  });
  
  actualizarImagen();
  
