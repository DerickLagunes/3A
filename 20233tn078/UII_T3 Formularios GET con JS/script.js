// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Verificar si las contraseñas coinciden
const password = urlParams.get("contraseña");
const confirmPassword = urlParams.get("contraseña2");

if (password === confirmPassword) {
    // Asignar valores a las celdas de la tabla
    document.getElementById("nombre").textContent = urlParams.get("nombre");
    document.getElementById("apellido").textContent = urlParams.get("apellido");
    document.getElementById("correo").textContent = urlParams.get("correo");
    document.getElementById("nacimiento").textContent = urlParams.get("nacimiento");
    document.getElementById("telefono").textContent = urlParams.get("telefono");
    
    // Verificar la seguridad de la contraseña
    if (password.length < 5) {
        document.getElementById("validacion").innerHTML = "Las contraseñas coinciden, pero tu contraseña es insegura. Debe tener al menos 5 caracteres.";
    } else {
        document.getElementById("validacion").innerHTML = "Las contraseñas coinciden.";
    }
} else {
    document.getElementById("validacion").innerHTML = "Las contraseñas no son iguales";
}

// Obtener el valor del parámetro "nacimiento" de la URL
let fechaString = urlParams.get("nacimiento");

// Convertir la cadena de fecha en un objeto Date
let fecha = new Date(fechaString);

// Obtener la fecha actual
let fechaActual = new Date();

// Calcular la diferencia de tiempo en milisegundos
let diferencia = fechaActual.getTime() - fecha.getTime();

// Calcular la edad en años
let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

// Mostrar la edad en el elemento con id "edad"
document.getElementById("edad").innerHTML = edad;
