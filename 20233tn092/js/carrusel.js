    const imagenes = [
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
      'img/img5.jpg'
    ];
    
    let indiceActual = 0;
    let imagenElement;
    
    function mostrarImagen() {
      imagenElement.src = imagenes[indiceActual];
    }
    
    function anteriorImagen() {
      indiceActual = (indiceActual === 0) ? imagenes.length - 1 : indiceActual - 1;
      mostrarImagen();
    }
    
    function siguienteImagen() {
      indiceActual = (indiceActual === imagenes.length - 1) ? 0 : indiceActual + 1;
      mostrarImagen();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      imagenElement = document.getElementById('imagen');
      document.getElementById('anterior').addEventListener('click', anteriorImagen);
      document.getElementById('siguiente').addEventListener('click', siguienteImagen);
      mostrarImagen();
    });