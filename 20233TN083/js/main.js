const images = [
        "https://www.regalarflores.net/wp-content/uploads/2015/02/rosas-rojas.jpg",
        "https://www.hola.com/imagenes/decoracion/20210412187603/cultivar-peonias-plantas-exterior-mc/0-939-646/cultivar-peonia-t.jpg",
        "https://www.besame.fm/wp-content/uploads/2024/03/girasol.jpg",
        "https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/02/tulipanes.jpg",
        "https://blog.verdiflora.com/wp-content/uploads/2022/03/enviar-gerberas-como-cuidarlas-cuando-regalarlas-cuidado-de-flores.png"
    ];
    let currentIndex = 0; // Índice actual de la imagen

    // Obtener la referencia a la etiqueta img y los botones
    const imgElement = document.getElementById('image');
    const anteriorButton = document.getElementById('anterior');
    const siguienteButton = document.getElementById('siguiente');

    // Función para actualizar la imagen mostrada
    function updateImage() {
        imgElement.src = images[currentIndex];
    }

    // Función para mostrar la imagen anterior
    function showAnteriorImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    }

    // Función para mostrar la imagen siguiente
    function showSiguienteImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    }

    // Agregar event listeners a los botones
    anteriorButton.addEventListener('click', showAnteriorImage);
    siguienteButton.addEventListener('click', showSiguienteImage);

    // Mostrar la primera imagen al cargar la página
    updateImage();