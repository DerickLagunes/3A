const images = ["IMG/ALO.png", "IMG/HAM.png", "IMG/LEC.png", "IMG/VER.png", "IMG/SAI.png", "IMG/PER.png", "IMG/RUS.png", "IMG/NOR.png", "IMG/OCO.png", "IMG/PIA.png"];
const pilots = ["Fernando Alonso", "Lewis Hamilton", "Charles Leclerc", "Max Verstappen", "Carlos Sainz", "Sergio Perez", "George Russell", "Lando Norris", "Esteban Ocon", "Oscar Piastri"];
let index = 0;
let imageElement = document.getElementById("image");
let pilotElement = document.getElementById("piloto");
let back = document.getElementById("backButton");
let next = document.getElementById("nextButton");

const showImage = (index) => {
    imageElement.src = images[index];
    pilotElement.textContent = pilots[index];
    console.log(`TEST: ${index}`);
};

const previousImage = () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
};

const nextImage = () => {
    index = (index + 1) % images.length;
    showImage(index);
};

back.addEventListener("click", previousImage);
next.addEventListener("click", nextImage);

showImage(index);

//Mascota interactiva
const mascota = document.getElementById('mascota-container');
const mensaje = document.getElementById('mensaje-mascota');
const mascotaImg = document.getElementById('mascota-img');

const mensajesPosibles = [
    "Tener hijos debería tener los mismos requerimientos y examenes que para adoptar uno, pruebas psicológicas, educación básica sobre como criar un niño correctamente (ay es que nadie te enseña a ser padre, NO, claro que hay gente que te enseña a ser un padre/madre decente) y sin mencionar el requisito básico de demostrar que estas económicamente preparado para tener un hijo y que demuestres tener un ambiente idoneo para criarlo",
    "Las drogas en este pais jamas van a acabarse, siempre va a estar ahi el tema. Por esto las drogas densas o naturales deberían ser legalizadas y el presupuesto para pelear en contra debería ser usada en programas de rehabilitación y para abrir clínicas profesionales que prevean las sustancias de manera legal y segura. Nada de sobredosis o mandar gente al pedo preso por faso were pasti lq sea, es una pelea que jamas se va a ganar si sigue así.",
    "Nada va a cambiar si no sube un loco que acribille a todas las ratas. La Chacarita debe desaparecer. Por la gente desagradable que sube, prefiero caminar 10 cuadras de mas para ir por Mcal. López antes que pasar por Eusebio Ayala. Los gordos que ocupan 2 lugares deberían pagar el doble del pasaje.",
    "La gente ignorante (independientemente de su clase social) no debería votar. los drogadicto o gente a la cual no le alcanza una educación, gente que no entiende del tema(incluyendo muchos)",
    "Las personas mas religiosas, ya sean católicas, evangélicas o de lo que sea por lo general son las personas que mas critican, juzgan y en vez de generarte esa curiosidad hacia lo que ellos creen te terminan alejando mucho mas sintiendo asco después de esa ideología y terminan apagandote esa curiosidad sin fundamentos validos o al menos no buscan convencerte de nada."
];

mascota.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * mensajesPosibles.length);
    mensaje.textContent = mensajesPosibles[indiceAleatorio];
});