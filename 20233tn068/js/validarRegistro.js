document.getElementById('registroForm').addEventListener('submit', function(event) {
    const contrasena = document.getElementsByName('contrasena')[0].value;
    const confirmar = document.getElementsByName('confirmar')[0].value;
    const mensajeError = document.getElementById('mensajeError');
    
    mensajeError.textContent = '';

    if (contrasena !== confirmar) {
        mensajeError.textContent = 'Las contraseñas no coinciden';
        event.preventDefault();
        return;
    }

    if (contrasena.length < 5) {
        mensajeError.textContent = 'La contraseña es insegura (menos de 5 caracteres)';
        event.preventDefault();
    }
});
