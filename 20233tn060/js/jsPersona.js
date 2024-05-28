function getParameter(key) {
    const address = window.location.search;
    const parameterList = new URLSearchParams(address);
    return parameterList.get(key);
}

const nombre = getParameter("nombrePersona");
const apellido = getParameter("apellidoPersona");
const email = getParameter("emailPersona");
const fechaNacimiento = getParameter("fechaNacimiento");
const telefono = getParameter("telefonoPersona");
const contraseña = getParameter("contraseñaPersona");
const contraseña2 = getParameter("contraseñaPersona2");

document.getElementById("verNombre").innerText = nombre;
document.getElementById("verApellido").innerText = apellido;

document.getElementById("verEmail").href = `mailto:${email}`;
document.getElementById("verEmail").innerText = email;

document.getElementById("verTelefono").href = `tel:${telefono}`;
document.getElementById("verTelefono").innerText = telefono;

const currentAge = new Date();
const currentDate = new Date(fechaNacimiento); 
const age = currentAge.getFullYear() - currentDate.getFullYear();
document.getElementById("verEdad").innerHTML = `Edad: ${age}`

if (contraseña !== contraseña2) {
    document.getElementById("resultadoContraseña").innerText = "Las contraseñas no son iguales";
} else if (contraseña.length < 5) {
    document.getElementById("resultadoContraseña").innerText = "Tu contraseña es insegura";
} else {
    document.getElementById("resultadoContraseña").innerText = "Tu contraseña es segura :D"
}