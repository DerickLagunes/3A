document.addEventListener('DOMContentLoaded', () => {
    const imagenes = [
        'https://cdn.pixabay.com/photo/2024/04/01/17/55/straubing-8669480_640.jpg',
        'https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_640.jpg',
        'https://cdn.pixabay.com/photo/2023/01/15/08/55/dog-7719758_640.jpg',
        'https://cdn.pixabay.com/photo/2024/05/12/09/28/brown-bear-8756478_640.png',
        'https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_640.jpg'
    ];

    let indiceActual = 0;
    const imgElement = document.getElementById('imagen');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');


    function mostrarImagen() {
        imgElement.classList.remove('active');
        setTimeout(() => {
            imgElement.src = imagenes[indiceActual];
            imgElement.classList.add('active');
        }, 500);
    }

  
    botonAnterior.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    });

    botonSiguiente.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen();
    });

    setTimeout(() => {
        imgElement.src = imagenes[indiceActual];
        imgElement.classList.add('active');
    }, 0); 
});
