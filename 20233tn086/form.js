document.getElementById('registroForm').addEventListener('submit', function(event) {
    var contrasena = document.getElementById('contrasena').value;
    var repetirContrasena = document.getElementById('repetirContrasena').value;
    var mensaje = document.getElementById('mensaje');

    mensaje.innerText = '';

    if (contrasena !== repetirContrasena) {
        event.preventDefault();
        mensaje.innerText = 'Las contraseñas no coinciden';
    } else if (contrasena.length < 5) {
        event.preventDefault();
        mensaje.innerText = 'Su contraseña es insegura';
    }
});