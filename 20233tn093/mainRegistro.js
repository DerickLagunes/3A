let getParameter = () =>{
    let address = window.location.search;

    let getParameterUrl = new URLSearchParams(address);


    let nombre = getParameterUrl.get("nombre");
    let apellido = getParameterUrl.get("apellido");
    let correo = getParameterUrl.get("correo");
    let fechaNac = getParameterUrl.get("fechaNac");
    let tel = getParameterUrl.get("tel");
    let user = getParameterUrl.get("user");
    let contra = getParameterUrl.get("contra");
    let repContra = getParameterUrl.get("repContra");
    
    

    return{"Nombre": nombre, "Apellidos": apellido, "Correo": correo, "Fecha de nacimiento": fechaNac, 
    "Telefono": tel, "Usuario": user, "Contraseña": contra, "Confirmar_contraseña": repContra}

}
let parametros = getParameter();



//Nombre
let nombres = document.getElementById("interfaz").appendChild(document.createElement('h1'));
nombres.textContent = parametros.Nombre;
nombres.setAttribute("class","nombres");

//Apellido
let apellidos = document.getElementById("interfaz").appendChild(document.createElement('h2'));
apellidos.textContent = parametros.Apellidos;
apellidos.setAttribute("class","apellidos");

//Correo
let email = document.createElement('a');
email.textContent = parametros.Correo;
email.href = `mailto:${parametros.Correo}`;
email.setAttribute("class","email");
interfaz.appendChild(email);

let tel = document.createElement('a');
tel.textContent = parametros.Telefono;
tel.href = `tel:${parametros.Telefono}`;
tel.setAttribute("class","telefono");
interfaz.appendChild(tel);


//Edad
let fechaNacimiento = parametros["Fecha de nacimiento"];
let añoActual = new Date().getFullYear();
let añoNacimiento = new Date(fechaNacimiento).getFullYear();
let edad = añoActual - añoNacimiento;

let edades = document.getElementById("interfaz").appendChild(document.createElement('h2'));
edades.textContent = edad;
edades.setAttribute("class","edades");


//Contraseña
// Verificar si las contraseñas coinciden
 // Verificar si las contraseñas coinciden
 if (parametros.Contraseña !== parametros.Confirmar_contraseña) {
    let mensajeError = document.createElement("p");
    mensajeError.textContent = "Las contraseñas no coinciden";
    mensajeError.setAttribute("id", "mensaje-error");
    interfaz.appendChild(mensajeError);
}