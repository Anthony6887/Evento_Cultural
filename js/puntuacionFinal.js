document.addEventListener('DOMContentLoaded', function () {
    // Obtener las puntuaciones guardadas en localStorage
    var puntuacionA = localStorage.getItem('groupAPoints');
    var puntuacionB = localStorage.getItem('groupBPoints');

    // Actualizar los campos de puntuación en el HTML
    document.getElementById('puntuacion-a').value = puntuacionA || '0';
    document.getElementById('puntuacion-b').value = puntuacionB || '0';
});
