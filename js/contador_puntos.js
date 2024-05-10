// Función para actualizar los puntos del Grupo A
function updateGroupAPoints() {
    // Obtener la respuesta correcta almacenada en localStorage
    var correctAnswer = localStorage.getItem("respuesta_pregunta1");
    var correctAnswer2 = localStorage.getItem("respuesta_pregunta2");
    
    // Verificar si la respuesta seleccionada es la correcta (opción A)
    if (correctAnswer === "A" && correctAnswer2 === "B") {
        // Obtener el contador de puntos del Grupo A
        var groupAPoints = document.getElementById("group-a-points");
        // Obtener el valor actual de los puntos
        var currentPoints = parseInt(groupAPoints.textContent);
        // Incrementar el valor de los puntos
        currentPoints += 1;
        // Actualizar el contador de puntos del Grupo A
        groupAPoints.textContent = currentPoints;
        // Guardar los puntos del Grupo A en localStorage
        localStorage.setItem("groupAPoints", currentPoints);
        // Mostrar un mensaje de respuesta correcta
        var message = document.getElementById("message");
        message.textContent = "¡Respuesta correcta! Has ganado 1 punto para el Grupo A.";
        message.classList.remove("error");
        message.classList.add("success");
        // Habilitar el botón "Siguiente"
        document.getElementById("nextButton").disabled = false;
    } else {
        // Mostrar un mensaje de respuesta incorrecta en caso de seleccionar una opción incorrecta
        var message = document.getElementById("message");
        message.textContent = "Respuesta incorrecta. Por favor, intenta de nuevo.";
        message.classList.add("error");
    }
}

// Llamar a la función para actualizar los puntos del Grupo A
updateGroupAPoints();
