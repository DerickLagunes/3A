document.addEventListener('DOMContentLoaded', () => {
    let imagenes = [
        'https://media.gq.com.mx/photos/642c40f06858c52e23508077/4:3/w_2252,h_1689,c_limit/202172174814_1%20(1).jpg',
        'https://sm.ign.com/ign_latam/screenshot/default/nwh-1_rcmf.jpg',
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/vengadores%202.jpg?tf=3840x',
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/gru-mi-villano-favorito-2982958.jpg?tf=3840x',
        'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/nacho-libre-2006/EB20060615REVIEWS60606004AR.jpg'
    ];

    let indice = 0;
    let carrusel = document.getElementById('carrusel');
    let anterior = document.getElementById('anterior');
    let siguiente = document.getElementById('siguiente');
    let uno = document.getElementById('1');
    let dos = document.getElementById('2');
    let tres = document.getElementById('3');
    let cuatro = document.getElementById('4');
    let cinco = document.getElementById('5');

    let punteros = [uno, dos, tres, cuatro, cinco];

    let mover = () => {
        carrusel.src = imagenes[indice];
        punteros[indice].classList.add('bg-sky-700');
    };

    anterior.addEventListener('click', () => {
        punteros[indice].classList.remove('bg-sky-700');
        indice = (indice === 0) ? imagenes.length - 1 : indice - 1;
        punteros.length - 1;
        mover();
    });

    siguiente.addEventListener('click', () => {
        punteros[indice].classList.remove('bg-sky-700');
        indice = (indice === imagenes.length - 1) ? 0 : indice + 1;
        punteros.length + 1;
        mover();
    });

    punteros.forEach((puntero, i) => {
        puntero.addEventListener('click', () => {
            punteros[indice].classList.remove('bg-sky-700');
            indice = i;
            mover();
        });
    });

    mover();
});
