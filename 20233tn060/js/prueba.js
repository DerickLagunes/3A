document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que el formulario se
        //envíe de la manera tradicional

        // Capturamos los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Creamos el objeto que vamos a enviar
        const datos = {
            nombre: nombre,
            email: email
        };

        try {
            // Enviamos los datos al servidor
            const respuesta = await fetch('http://192.168.107.135:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos) //JSON.stringify genera el objeto Json
            });

            // Verificamos si la respuesta es exitosa
            if (respuesta.ok) {
                const datosRespuesta = await respuesta.json();
                document.getElementById('respuesta').innerText =
                'Datos enviados correctamente: '
                + JSON.stringify(datosRespuesta);
            } else {
                document.getElementById('respuesta').innerText =
                'Error al enviar los datos';
            }
        } catch (error) {
            // Manejamos cualquier error que ocurra durante la solicitud
            console.error('Error:', error);
            document.getElementById('respuesta').innerText =
            'Error al enviar los datos: ' + error.message;
        }
    });
});