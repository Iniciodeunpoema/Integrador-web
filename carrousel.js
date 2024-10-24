const imagenes = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
];

let indiceActual = 0;

const imagenElemento = document.querySelector('.carrousel-imagenes');

function mostrarImagen() {
    imagenElemento.style.backgroundImage = `url(${imagenes[indiceActual]})`;
}

function avanzar() {
    indiceActual = (indiceActual + 1) % imagenes.length; // Avanza y vuelve al inicio si es necesario
    mostrarImagen();
}

function retroceder() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Retrocede y vuelve al final si es necesario
    mostrarImagen();
}

document.querySelector('.siguiente').addEventListener('click', avanzar);
document.querySelector('.anterior').addEventListener('click', retroceder);

// Inicializa mostrando la primera imagen
mostrarImagen();
