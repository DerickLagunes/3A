document.addEventListener('DOMContentLoaded', (event) => {
    //Designe un arreglo para colocar las imagenes de nuestro sistema
    const images = [
        'img/breaking_bad.jpg',
        'img/casa_papel.jpg',
        'img/invencible.jpg',
        'img/peaky_blinders.jpg',
        'img/rick_morty.jpg'
    ];

    let currentIndex = 0;

    // Vamos a obetenre las id de nuestros objetos que cree
    //en el html para asi juntarlos y tenerlos para que reaccionen entre si
    const carouselImage = document.getElementById('carouselImage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Esta funcion nos muestra la imagen actual 
    function showImage(index) {
        carouselImage.src = images[index];
    }

    // Nos meustra la imane en curso
    showImage(currentIndex);

    // La misma nos permite movernos dentro del arreglo disminuyendo o aumentando un numero al indixe
    //Lo cual nos permitira navegar a travez del arreglo
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});
