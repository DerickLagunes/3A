const urlParams = new URLSearchParams(window.location.search);

const password = urlParams.get("contraseña");
const confirmPassword = urlParams.get("contraseña2");

if (password === confirmPassword) {
    document.getElementById("nombre").textContent = urlParams.get("nombre");
    document.getElementById("apellido").textContent = urlParams.get("apellido");
    document.getElementById("correo").textContent = urlParams.get("correo");
    document.getElementById("nacimiento").textContent = urlParams.get("nacimiento");
    document.getElementById("telefono").textContent = urlParams.get("telefono");
    
    if (password.length < 5) {
        document.getElementById("validacion").innerHTML = "Las contraseñas coinciden";
    } else {
        document.getElementById("validacion").innerHTML = "Las contraseñas coinciden.";
    }
} else {
    document.getElementById("validacion").innerHTML = "Las contraseñas no son iguales";
}

let fechaString = urlParams.get("nacimiento");

let fecha = new Date(fechaString);

let fechaActual = new Date();

let diferencia = fechaActual.getTime() - fecha.getTime();

let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

document.getElementById("edad").innerHTML = edad;
