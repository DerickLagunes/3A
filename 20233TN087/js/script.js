document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://c4.wallpaperflare.com/wallpaper/892/763/811/combat-juego-luchas-mortal-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/535/658/344/belico-guerras-juego-video-wallpaper-preview.jpg",
        "https://wallpaper.forfun.com/fetch/9e/9e540e22f731651baef40ea0e3fb9159.jpeg",
        "https://w.forfun.com/fetch/f8/f8c7ccc0a1e26a12c919caa025104f65.jpeg",
        "https://wallpapercave.com/wp/wp11884019.jpg",
	    "https://images.alphacoders.com/128/1281606.png"
    ];
    
    let indiceActual = 0;
    const carruselImg = document.getElementById("carruselImg");
    const antesBtn = document.getElementById("antesBtn");
    const despuesBtn = document.getElementById("despuesBtn");
    
    function showImage(index) {
        carruselImg.src = images[index];
    }
    
    antesBtn.addEventListener("click", function() {
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : images.length - 1;
        showImage(indiceActual);
    });
    
    despuesBtn.addEventListener("click", function() {
        indiceActual = (indiceActual < images.length - 1) ? indiceActual + 1 : 0;
        showImage(indiceActual);
    });
    
    showImage(indiceActual);
});
