function checkAnswer(answer) {
    var messageDiv = document.getElementById('message');
    var scoreCount = document.getElementById('scoreCount');
    var correctAnswer = true; // Respuesta correcta para esta pregunta
    
    if (answer === correctAnswer) {
        messageDiv.textContent = "¡Correcto!";
        messageDiv.classList.add('correct');
        updateScore(10); // Suma 10 puntos por respuesta correcta
        var currentScore = parseInt(scoreCount.textContent);
        localStorage.setItem('score', currentScore); // Almacenar el puntaje en localStorage
        setTimeout(function() {
            window.location.href = 'verdadero_falso2.html'; // Redirigir a la siguiente pregunta
        }, 2000); // Esperar 2 segundos antes de redirigir
    } else {
        messageDiv.textContent = "¡Incorrecto!";
        messageDiv.classList.add('incorrect');
    }

    // Deshabilitar botones después de responder
    document.getElementById('trueButton').disabled = true;
    document.getElementById('falseButton').disabled = true;
}

function updateScore(points) {
    var scoreElement = document.getElementById('scoreCount');
    var currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}
