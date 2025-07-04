document.addEventListener('DOMContentLoaded', function () {
    
    
    var form = document.getElementById('quiz-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita recarga

        // Capturar valores
        var q1 = document.getElementById('question1').value;
        var q2 = document.getElementById('question2').value;
        var q3 = document.getElementById('question3').value;

        // Respuestas correctas
        var correcta1 = "1";
        var correcta2 = "2";
        var correcta3 = "3";

        // Mensaje
        var mensaje = "";

        if (q1 === correcta1) {
            mensaje += "✅ Pregunta 1: ¡Correcta!<br> La respuesta correcta es: 'Correos con errores ortográficos y urgencia.'<br>";
        } else {
            mensaje += "❌ Pregunta 1: Incorrecta. La respuesta correcta es: 'Correos con errores ortográficos y urgencia.'<br>";
        }

        if (q2 === correcta2) {
            mensaje += "✅ Pregunta 2: ¡Correcta!<br> La respuesta correcta es: 'Cifra los archivos y pide un rescate.'<br>";
        } else {
            mensaje += "❌ Pregunta 2: Incorrecta. La respuesta correcta es: 'Cifra los archivos y pide un rescate.'<br>";
        }

        if (q3 === correcta3) {
            mensaje += "✅ Pregunta 3: ¡Correcta!<br> La respuesta correcta es: 'Cifra los archivos y pide un rescate.'<br>";
        } else {
            mensaje += "❌ Pregunta 3: Incorrecta. La respuesta correcta es: 'Activar autenticación en dos pasos.'<br>";
        }

        // Mostrar el mensaje en pantalla (por ejemplo, debajo del modal)
        var feedback = document.getElementById('feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'feedback';
            feedback.className = 'alert alert-info mt-3';
            document.body.appendChild(feedback);
        }
        feedback.innerHTML = mensaje;

        // Cerrar el modal (usando Bootstrap 5)
        var modalElement = document.getElementById('modalQuiz');
        var modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });
});