const imagenes = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg'
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById('imagenCarrusel');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

function mostrarImagen(indice) {
    imagenCarrusel.src = imagenes[indice];
}

siguiente.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
});

anterior.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

// Mostrar la primera imagen al cargar
mostrarImagen(indiceActual);
