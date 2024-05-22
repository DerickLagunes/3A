const imagenes = [
    'img/imagen1.jpg',
    'img/imagen2.jpg',
    'img/imagen3.jpeg',
    'img/imagen4.jpg',
    'img/imagen5.jpg'
];

    let indiceActual = 0;
    const img = document.querySelector('#carrusel img');

    const mostrarImagen = indice => {
    img.src = imagenes[indice];
}

    const siguienteImagen = () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
}

    const anteriorImagen = () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
}

document.querySelector('#prevBtn').addEventListener('click', anteriorImagen);
document.querySelector('#nextBtn').addEventListener('click', siguienteImagen);

mostrarImagen(indiceActual);