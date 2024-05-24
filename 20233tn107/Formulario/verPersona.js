function getParameter(key) {
    const address = window.location.search;
    const parameterList = new URLSearchParams(address);
    return parameterList.get(key);
}

// Recibir los datos de la URL
const firstName = getParameter("firstName");
const lastName = getParameter("lastName");
const email = getParameter("email");
const birthDate = getParameter("birthDate");
const phoneNumber = getParameter("phoneNumber");
const user = getParameter("user");
const password = getParameter("password");
const confirmPassword = getParameter("confirmPassword");

// Mostrar el nombre en la página
const firstNameElement = document.getElementById("viewFirstName");
firstNameElement.innerText = firstName;

// Mostrar el apellido en la página
const lastNameElement = document.getElementById("viewLastName");
lastNameElement.innerText = lastName;

// Mostrar el correo en la página
const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${email}`;
emailLink.innerText = email;

// Mostrar el teléfono en la página
const phoneLink = document.getElementById("phoneLink");
phoneLink.href = `tel:${phoneNumber}`;
phoneLink.innerText = phoneNumber;

// Calcular la edad
const birthDateObject = new Date(birthDate);
const currentDate = new Date();
const age = currentDate.getFullYear() - birthDateObject.getFullYear();
viewAge.innerHTML = `Edad: ${age}`;

// Validar la contraseña
if (password !== confirmPassword) {
    const passwordInfo = document.getElementById("passwordInfo");
    passwordInfo.innerText = "Las contraseñas no coinciden";
    passwordInfo.hidden = false;
}
if (password.length < 5) {
    const passwordInfo = document.getElementById("passwordInfo");
    passwordInfo.innerText = "Tu contraseña es insegura";
    passwordInfo.hidden = false;
}