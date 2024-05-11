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
