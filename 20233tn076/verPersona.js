function getParameter(key) {
    const address = window.location.search;
    const parameterList = new URLSearchParams(address);
    return parameterList.get(key);
}

const nombre = getParameter("name");
const etiqueta_nombre = document.getElementById("name");
etiqueta_nombre.innerText += " " + nombre;

const apellido = getParameter("last_name");
const etiqueta_apellido = document.getElementById("last_name");
etiqueta_apellido.innerText += " " + apellido;

const correo = getParameter("email");
const etiqueta_correo = document.getElementById("email");
etiqueta_correo.href = `mailto:${correo}`;
etiqueta_correo.innerText += " " + correo;

const telefono = getParameter("telephone");
const etiqueta_telefono = document.getElementById("telephone");
etiqueta_telefono.href = `tel:${telefono}`;
etiqueta_telefono.innerText += " " + telefono;

const fecha_nacimiento = getParameter("date_of_birth");
const etiqueta_fecha = new Date(fecha_nacimiento);
const fecha_actual = new Date();
const edad = fecha_actual.getFullYear() - etiqueta_fecha.getFullYear();
document.getElementById("edad").innerHTML = `Edad: ${edad}`;


const user = getParameter("user");
const password = getParameter("password");
const confirm_password = getParameter("confirm_password");
const mensaje = 
  (password !== confirm_password ? "Las contraseñas no coinciden" : "") +
  (password !== confirm_password && password.length < 5 ? " y " : "") +
  (password.length < 5 ? "tu contraseña es insegura" : "");

if (mensaje) {
    contra.innerText = mensaje.charAt(0).toUpperCase() + mensaje.slice(1);
    contra.innerText += " °՞(ᗒ﹏ᗕ)՞°";
    contra.hidden = false;
}