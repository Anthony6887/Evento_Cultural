function checkAnswer(answer) {
    var messageDiv = document.getElementById('message');
    var score = document.getElementById('score');
    var correctAnswer = true; // Respuesta correcta para esta pregunta
    
    if (answer === correctAnswer) {
        messageDiv.textContent = "¡Correcto!";
        messageDiv.classList.add('correct');
        updateScore(10); // Suma 10 puntos por respuesta correcta
    } else {
        messageDiv.textContent = "¡Incorrecto!";
        messageDiv.classList.add('incorrect');
    }

    // Deshabilitar botones después de responder
    document.getElementById('trueButton').disabled = true;
    document.getElementById('falseButton').disabled = true;
}

function updateScore(points) {
    var scoreElement = document.getElementById('score');
    var currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}
