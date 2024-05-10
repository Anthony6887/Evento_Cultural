let puntaje = localStorage.getItem('puntaje') ? parseInt(localStorage.getItem('puntaje')) : 0;

function verificarRespuesta(respuesta) {
    if (respuesta) {
        puntaje += 10; // Sumar 10 puntos por respuesta correcta
        document.getElementById('resultado').innerText = '¡Correcto!';
    } else {
        document.getElementById('resultado').innerText = '¡Incorrecto!';
    }
    mostrarPuntaje(); // Mostrar el puntaje actualizado

    // Guardar el puntaje en localStorage para mostrar en la página de puntaje total
    localStorage.setItem('puntaje', puntaje);

    // Redirigir al usuario a la siguiente pregunta
    if (document.location.href.includes('verdadero_falso1.html')) {
        setTimeout(() => { window.location.href = 'verdadero_falso2.html'; }, 1000); // Redirige a pregunta2.html después de 1 segundo
    } else if (document.location.href.includes('verdadero_falso2.html')) {
        setTimeout(() => { window.location.href = 'verdadero_falsoFinal.html'; }, 1000); // Redirige a puntaje.html después de 1 segundo
    }
}

function mostrarPuntaje() {
    // Mostrar el puntaje actualizado en todas las pantallas
    let puntajeElements = document.getElementsByClassName('puntaje');
    for (let element of puntajeElements) {
        element.innerText = puntaje;
    }
}

// Contador de tiempo
let tiempoRestante = 30; // Tiempo en segundos
let intervalo = setInterval(actualizarContador, 1000); // Actualizar el contador cada segundo

function actualizarContador() {
    tiempoRestante--;
    if (tiempoRestante <= 0) {
        clearInterval(intervalo); // Detener el contador cuando el tiempo se acaba
        tiempoAgotado(); // Llamar a la función cuando se agota el tiempo
    }
}

function tiempoAgotado() {
    document.getElementById('resultado').innerText = 'Tiempo agotado';
    document.getElementById('resultado').style.color = 'red';
    // Agregar lógica para manejar la respuesta cuando se acaba el tiempo (por ejemplo, tomarlo como incorrecto)
    // Aquí puedes llamar a la función verificarRespuesta() con false para tomar la respuesta como incorrecta
    verificarRespuesta(false);
}
