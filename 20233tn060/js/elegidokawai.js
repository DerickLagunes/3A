document.addEventListener('DOMContentLoaded', (event) => {
    const avatarElegidokawai = [
        'img/elegidoakawai1.png',
        'img/elegidoakawai2.jpg',
        'img/elegidoakawai3.png',
        'img/elegidoakawai4.png',
        'img/elegidoakawai5.jpg',
        'img/elegidoakawai6.jpg',
        'img/elegidoakawai7.png'
    ];

    const cambioAvatar = document.getElementById('imgElegidokawai');
    const botonAdelante = document.getElementById('imgAdelante');
    const botonAtras = document.getElementById('imgAtras');

    let imgElegidokawai = 1;

    function mostrarIMG() {
        cambioAvatar.src = avatarElegidokawai[imgElegidokawai];
    }

    mostrarIMG();

    botonAtras.addEventListener('click', () => {
        imgElegidokawai = (imgElegidokawai - 1 + avatarElegidokawai.length) % avatarElegidokawai.length;
        mostrarIMG();
    });

    botonAdelante.addEventListener('click', () => {
        imgElegidokawai = (imgElegidokawai + 1) % avatarElegidokawai.length;
        mostrarIMG();
    });

});