document.addEventListener('DOMContentLoaded', (event) => {
    const imagenesEBM = [
        'img/Sayori.png',
        'img/Yuri.png',
        'img/Natsuki.png',
        'img/Monika.png',
        'img/cato.jpg'
    ];

    const carruselIMG = document.getElementById('imagenCarrusel');
    const botonAtras = document.getElementById('imagenAdelante');
    const botonAdelante = document.getElementById('imagenAtras');

    let imagenActual = 1;

    function verImagen() {
        carruselIMG.src = imagenesEBM[imagenActual];
    }

    verImagen();

    botonAtras.addEventListener('click', () => {
        imagenActual = (imagenActual - 1 + imagenesEBM.length) % imagenesEBM.length;
        verImagen();
    });

    botonAdelante.addEventListener('click', () => {
        imagenActual = (imagenActual + 1) % imagenesEBM.length;
        verImagen();
    });

});
