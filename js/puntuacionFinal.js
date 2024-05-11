document.addEventListener('DOMContentLoaded', function () {
    // Obtener las puntuaciones guardadas en localStorage para el grupo A
    var puntuacionAMultipleChoice = parseInt(localStorage.getItem('groupAPoints') || '0');
    var puntuacionAVerdaderoFalso = parseInt(localStorage.getItem('groupAPointsVF') || '0');

    // Obtener las puntuaciones guardadas en localStorage para el grupo B
    var puntuacionBMultipleChoice = parseInt(localStorage.getItem('groupBPoints') || '0');
    var puntuacionBVerdaderoFalso = parseInt(localStorage.getItem('groupBPointsVF') || '0');

    // Calcular la puntuación total del grupo A sumando las puntuaciones de ambas modalidades
    var puntuacionATotal = puntuacionAMultipleChoice + puntuacionAVerdaderoFalso;

    // Calcular la puntuación total del grupo B sumando las puntuaciones de ambas modalidades
    var puntuacionBTotal = puntuacionBMultipleChoice + puntuacionBVerdaderoFalso;

    // Actualizar el campo de puntuación en el HTML para el grupo A
    document.getElementById('puntuacion-a').value = puntuacionATotal.toString();

    // Actualizar el campo de puntuación en el HTML para el grupo B
    document.getElementById('puntuacion-b').value = puntuacionBTotal.toString();
});

function reiniciarPuntuaciones() {
    // Borrar todas las puntuaciones del almacenamiento local
    localStorage.removeItem('groupAPoints');
    localStorage.removeItem('groupAPointsVF');
    localStorage.removeItem('groupBPoints');
    localStorage.removeItem('groupBPointsVF');

    localStorage.removeItem('respuesta_pregunta1');
    localStorage.removeItem('respuesta_pregunta2');
    localStorage.removeItem('respuesta_pregunta3');
    localStorage.removeItem('respuesta_pregunta4');
    localStorage.removeItem('respuesta_pregunta5');
    localStorage.removeItem('respuesta_pregunta6');

    localStorage.removeItem('respuesta_pregunta1VF');
    localStorage.removeItem('respuesta_pregunta2VF');
    localStorage.removeItem('respuesta_pregunta3VF');
    localStorage.removeItem('respuesta_pregunta4VF');
    localStorage.removeItem('respuesta_pregunta5VF');
    localStorage.removeItem('respuesta_pregunta6VF');

    localStorage.removeItem('respuesta_incorrecta_pregunta1');
    localStorage.removeItem('respuesta_incorrecta_pregunta2');
    localStorage.removeItem('respuesta_incorrecta_pregunta3');
    localStorage.removeItem('respuesta_incorrecta_pregunta4');
    localStorage.removeItem('respuesta_incorrecta_pregunta5');
    localStorage.removeItem('respuesta_incorrecta_pregunta6');

    localStorage.removeItem('respuesta_incorrecta_pregunta1VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta2VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta3VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta4VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta5VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta6VF');



    document.getElementById('puntuacion-a').value = '0';
    document.getElementById('puntuacion-b').value = '0';
}

function mostrarGanador() {
    var puntuacionA = parseInt(localStorage.getItem('groupAPoints') || '0');
    var puntuacionB = parseInt(localStorage.getItem('groupBPoints') || '0');

    if (puntuacionA > puntuacionB) {
        alert('El ganador es el Grupo A');
    } else if (puntuacionB > puntuacionA) {
        alert('El ganador es el Grupo B');
    } else {
        alert('Hay un empate');
    }
}

