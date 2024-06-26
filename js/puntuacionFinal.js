document.addEventListener('DOMContentLoaded', function () {
    // Obtener las puntuaciones guardadas en localStorage para el grupo A
    var puntuacionAMultipleChoice = parseInt(localStorage.getItem('groupAPoints') || '0');
    var puntuacionAVerdaderoFalso = parseInt(localStorage.getItem('groupAPointsVF') || '0');
    var puntuacionAPista = parseInt(localStorage.getItem('groupAPointsPista') || '0');

    // Obtener las puntuaciones guardadas en localStorage para el grupo B
    var puntuacionBMultipleChoice = parseInt(localStorage.getItem('groupBPoints') || '0');
    var puntuacionBVerdaderoFalso = parseInt(localStorage.getItem('groupBPointsVF') || '0');
    var puntuacionBPista = parseInt(localStorage.getItem('groupBPointsPista') || '0');

    // Calcular la puntuación total del grupo A sumando las puntuaciones de ambas modalidades
    var puntuacionATotal = puntuacionAMultipleChoice + puntuacionAVerdaderoFalso + puntuacionAPista;

    // Calcular la puntuación total del grupo B sumando las puntuaciones de ambas modalidades
    var puntuacionBTotal = puntuacionBMultipleChoice + puntuacionBVerdaderoFalso + puntuacionBPista;


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
    localStorage.removeItem('groupAPointsPista');
    localStorage.removeItem('groupBPointsPista');

    localStorage.removeItem('respuesta_pregunta1');
    localStorage.removeItem('respuesta_pregunta2');
    localStorage.removeItem('respuesta_pregunta3');
    localStorage.removeItem('respuesta_pregunta4');
    localStorage.removeItem('respuesta_pregunta5');
    localStorage.removeItem('respuesta_pregunta6');

    localStorage.removeItem('respuesta_pregunta1a');
    localStorage.removeItem('respuesta_pregunta2a');
    localStorage.removeItem('respuesta_pregunta3a');
    localStorage.removeItem('respuesta_pregunta1b');
    localStorage.removeItem('respuesta_pregunta2b');
    localStorage.removeItem('respuesta_pregunta3b');

    localStorage.removeItem('respuesta_pregunta1VF');
    localStorage.removeItem('respuesta_pregunta2VF');
    localStorage.removeItem('respuesta_pregunta3VF');
    localStorage.removeItem('respuesta_pregunta4VF');
    localStorage.removeItem('respuesta_pregunta5VF');
    localStorage.removeItem('respuesta_pregunta6VF');

    localStorage.removeItem('respuesta_pregunta1Pista');
    localStorage.removeItem('respuesta_pregunta2Pista');
    localStorage.removeItem('respuesta_pregunta3Pista');
    localStorage.removeItem('respuesta_pregunta4Pista');


    localStorage.removeItem('respuesta_pregunta1PistaI');

    localStorage.removeItem('respuesta_vacia_pregunta1');
    localStorage.removeItem('respuesta_vacia_pregunta1aq');


    localStorage.removeItem('respuesta_preguntaq1');
    localStorage.removeItem('respuesta_preguntaq2');
    localStorage.removeItem('respuesta_preguntaq3');
    localStorage.removeItem('respuesta_preguntaq4');
    localStorage.removeItem('respuesta_preguntaq5');
    localStorage.removeItem('respuesta_preguntaq6');
    localStorage.removeItem('respuesta_preguntaq7');
    localStorage.removeItem('respuesta_preguntaq8');
    localStorage.removeItem('respuesta_preguntaq9');
    localStorage.removeItem('respuesta_preguntaq10');
    localStorage.removeItem('respuesta_preguntaq11');
    localStorage.removeItem('respuesta_preguntaq12');

    localStorage.removeItem('groupAPointsQ');
    localStorage.removeItem('groupBPointsQ');


    localStorage.removeItem('respuesta_incorrecta_preguntaq1');
    localStorage.removeItem('respuesta_incorrecta_preguntaq2');
    localStorage.removeItem('respuesta_incorrecta_preguntaq3');
    localStorage.removeItem('respuesta_incorrecta_preguntaq4');
    localStorage.removeItem('respuesta_incorrecta_preguntaq5');
    localStorage.removeItem('respuesta_incorrecta_preguntaq6');
    localStorage.removeItem('respuesta_incorrecta_preguntaq7');
    localStorage.removeItem('respuesta_incorrecta_preguntaq8');
    localStorage.removeItem('respuesta_incorrecta_preguntaq9');
    localStorage.removeItem('respuesta_incorrecta_preguntaq10');
    localStorage.removeItem('respuesta_incorrecta_preguntaq11');
    localStorage.removeItem('respuesta_incorrecta_preguntaq12');

    localStorage.removeItem('respuesta_vacia_pregunta1a');

    localStorage.removeItem('respuesta_incorrecta_pregunta1');
    localStorage.removeItem('respuesta_incorrecta_pregunta2');
    localStorage.removeItem('respuesta_incorrecta_pregunta3');
    localStorage.removeItem('respuesta_incorrecta_pregunta4');
    localStorage.removeItem('respuesta_incorrecta_pregunta5');
    localStorage.removeItem('respuesta_incorrecta_pregunta6');

    localStorage.removeItem('respuesta_incorrecta_pregunta1a');
    localStorage.removeItem('respuesta_incorrecta_pregunta2a');
    localStorage.removeItem('respuesta_incorrecta_pregunta3a');
    localStorage.removeItem('respuesta_incorrecta_pregunta1b');
    localStorage.removeItem('respuesta_incorrecta_pregunta2b');
    localStorage.removeItem('respuesta_incorrecta_pregunta3b');
    

    localStorage.removeItem('respuesta_incorrecta_pregunta1VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta2VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta3VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta4VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta5VF');
    localStorage.removeItem('respuesta_incorrecta_pregunta6VF');

    localStorage.removeItem('respuesta_vacia_pregunta1a1');
    localStorage.removeItem('respuesta_vacia_pregunta1a2');
    localStorage.removeItem('respuesta_vacia_pregunta1a3');
    localStorage.removeItem('respuesta_vacia_pregunta1a4');
    localStorage.removeItem('respuesta_vacia_pregunta1a5');
    localStorage.removeItem('respuesta_vacia_pregunta1a6');
    localStorage.removeItem('respuesta_vacia_pregunta1b1');
    localStorage.removeItem('respuesta_vacia_pregunta1b2');
    localStorage.removeItem('respuesta_vacia_pregunta1b3');
    localStorage.removeItem('respuesta_vacia_pregunta1b4');
    localStorage.removeItem('respuesta_vacia_pregunta1b5');
    localStorage.removeItem('respuesta_vacia_pregunta1b6');

    localStorage.removeItem('respuesta_vacia_pregunta1a1v');
    localStorage.removeItem('respuesta_vacia_pregunta1a2v');
    localStorage.removeItem('respuesta_vacia_pregunta1a3v');
    localStorage.removeItem('respuesta_vacia_pregunta1a4v');
    localStorage.removeItem('respuesta_vacia_pregunta1a5v');
    localStorage.removeItem('respuesta_vacia_pregunta1a6v');
    





    document.getElementById('puntuacion-a').value = '0';
    document.getElementById('puntuacion-b').value = '0';
}

function mostrarGanador() {

    // Obtener los puntos del grupo A y del grupo B del localStorage
    var puntuacionA = parseInt(localStorage.getItem('groupAPoints') || '0');
    var puntuacionB = parseInt(localStorage.getItem('groupBPoints') || '0');

    var sumaPuntosGrupoA = puntuacionA + parseInt(localStorage.getItem('groupAPointsVF') || '0') + parseInt(localStorage.getItem('groupAPointsPista') || '0');
    var sumaPuntosGrupoB = puntuacionB + parseInt(localStorage.getItem('groupBPointsVF') || '0') + parseInt(localStorage.getItem('groupBPointsPista') || '0');


    var mensaje;
    if (sumaPuntosGrupoA > sumaPuntosGrupoB) {
        mensaje = 'GANADOR EQUIPO A';
    } else if (sumaPuntosGrupoA < sumaPuntosGrupoB) {
        mensaje = 'GANADOR EQUIPO B';
    } else  {
        mensaje = '¡Hay un Empate!';
    }

    // Crear la URL con el mensaje como parámetro
    var url = 'ganador.html?mensaje=' + encodeURIComponent(mensaje);
    // Redirigir a la página ganador.html con el mensaje como parámetro
    window.location.href = url;
}
function volver(){
    window.location.href = 'index.html';
}
