let getParameter = () => {

    let  address = window.location.search;

    let parameterUrl = new URLSearchParams(address);

    let  nombre = parameterUrl.get("nombre");
    let apellido = parameterUrl.get("apellido");
    let correo = parameterUrl.get("correo");
    let date = parameterUrl.get("date");
    let cel = parameterUrl.get("tel");
    let user = parameterUrl.get('user');
    let passConfirm = parameterUrl.get("passCon");
    let pass = parameterUrl.get("pass");
    

    return {
        "nombre":nombre,
        "apellido" : apellido,
        "correo": correo,
        "date":date,
        "telefono":cel,
        "user": user,
        "password":pass,
        "passwordCon":passConfirm
    }
};  


let response = getParameter();


let nombres = document.getElementById('bodyDos').appendChild(document.createElement('h1'));
nombres.textContent = response.nombre

let apellidos = document.body.appendChild(document.createElement('h2'));

apellidos.textContent = response.apellido;

let correo = document.body.appendChild(document.createElement('a'));

correo.setAttribute("href", "mailto:" + response.correo);
correo.textContent = "Correo"
correo.setAttribute('href','text');

let telefono = document.body.appendChild(document.createElement('a'));

telefono.setAttribute('href',"tel:" + response.telefono);
telefono.textContent = "Telefono";
telefono.setAttribute('href',"text");
let fechaActual = new Date();

let fechaNacimineto = new Date(response.date);

let edad = fechaActual - fechaNacimineto;

let edadComponent = document.body.appendChild(document.createElement('p'));

edadComponent.textContent ="edad" + edadComponent;

let password = document.body.appendChild(document.createElement('p'));



if (response.password != response.passwordCon && response.password.length < 5) {
    password.textContent = "NO coinciden las contrasenas y no es segura"
}

