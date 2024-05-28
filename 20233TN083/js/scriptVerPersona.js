function verPersona(key){
    const address = window.location.search; // url de la ventana actual
    const parameterList = new URLSearchParams(address);  // Objeto de tipo URLSearchParams
    return parameterList.get(key); // Regresa el valor del parámetro “key”
}

// Obtener la referencia de los datos
const nombre = verPersona('nombre');
const apellidos = verPersona('apellidos');
const email = verPersona('email');
const fechaNacimiento = verPersona('fechaNacimiento');
const telefono = verPersona('telefono');
const usuario = verPersona('usuario');
const contrasenia = verPersona('contrasenia');
const repetirContrasenia = verPersona('repetirContrasenia');

// Calcular la edad
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

 // Validar las contraseñas
 const mensaje = document.getElementById('mensaje');
 if (contrasenia !== repetirContrasenia) {
     mensaje.innerText = "Las contraseñas no coinciden";
 } else if (contrasenia.length < 5) {
     mensaje.innerText = "La contraseña es insegura";
 }else if(contrasenia == repetirContrasenia) {
    mensaje.innerText = "'Las contraseñas coinciden'";
 }

// Mostrar los valores en el HTML
document.getElementById('nombre').innerText = nombre;
document.getElementById('apellidos').innerText = apellidos;
document.getElementById('email').innerText = email;
document.getElementById('email').href = `mailto:${email}`;
document.getElementById('telefono').innerText = telefono;
document.getElementById('telefono').href = `tel:${telefono}`;
document.getElementById('edad').innerText = `${calcularEdad(fechaNacimiento)} años`;