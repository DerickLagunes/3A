document.addEventListener("DOMContentLoaded", function() {
    // Array con las URL de las imágenes
    const images = [
        "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
        "https://www.nobbot.com/wp-content/uploads/2023/07/Expandir-imagen-con-IA-01.jpg",
        "https://pics.craiyon.com/2023-10-21/1f1d408dddce4984a689afc06d9f42d8.webp",
        "https://significado.com/wp-content/uploads/Imagen-Animada.jpg",
        "https://blog.jumboprinters.com/wp-content/uploads/2021/09/consejos-imagenes-768x400.jpg"
    ];

    // Índice para la imagen actual
    let currentIndex = 0;

    // Elemento de la imagen en el DOM
    const carouselImage = document.getElementById("carousel-image");

    // Función para actualizar la imagen mostrada

    
    function updateImage() {
        carouselImage.src = images[currentIndex];
    }

    // Event listeners para los botones
    document.getElementById("prev-button").addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    });

    document.getElementById("next-button").addEventListener("click", function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });

    // Inicializar la imagen al cargar la página
    updateImage();
});