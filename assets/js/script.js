document.addEventListener('DOMContentLoaded', function () {
    
    let form = document.getElementById('quiz-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita recarga

        // Capturar valores
        let q1 = document.getElementById('question1').value;
        let q2 = document.getElementById('question2').value;
        let q3 = document.getElementById('question3').value;

        // Respuestas correctas
        let correcta1 = "1";
        let correcta2 = "2";
        let correcta3 = "3";

        // Mensaje
        let mensaje = "";

        if (q1 === correcta1) {
            mensaje += "✅ Pregunta 1: ¿Cuál es una señal de un posible ataque de phishing?<br> La respuesta es correcta: 'Correos con errores ortográficos y urgencia.'<br>";
        } else {
            mensaje += "❌ Pregunta 1: Incorrecta. La respuesta correcta es: 'Correos con errores ortográficos y urgencia.'<br>";
        }

        if (q2 === correcta2) {
            mensaje += "✅ Pregunta 2: ¿Qué hace un ransomware?<br> La respuesta es correcta: 'Cifra los archivos y pide un rescate.'<br>";
        } else {
            mensaje += "❌ Pregunta 2: Incorrecta. La respuesta correcta es: 'Cifra los archivos y pide un rescate.'<br>";
        }

        if (q3 === correcta3) {
            mensaje += "✅ Pregunta 3: ¿Cuál de los siguientes hábitos es seguro?<br> La respuesta es correcta: 'Activar autenticación en dos pasos.'<br>";
        } else {
            mensaje += "❌ Pregunta 3: Incorrecta. La respuesta correcta es: 'Activar autenticación en dos pasos.'<br>";
        }

        // Mostrar el mensaje en pantalla (por ejemplo, debajo del modal)
        let feedback = document.getElementById('feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'feedback';
            feedback.className = 'alert alert-info d-block m-auto';
            document.body.appendChild(feedback);
        }
        feedback.innerHTML = mensaje;

            let quizSection = document.querySelector('.quiz');

        if (quizSection) {
        // Ocultar h3
            let titulo = quizSection.querySelector('h3');
            if (titulo) titulo.style.display = 'none';

        // Ocultar todos los párrafos
            let parrafos = quizSection.querySelectorAll('p');
            parrafos.forEach(p => p.style.display = 'none');

        // Ocultar el botón
            let boton = quizSection.querySelector('button');
            if (boton) boton.style.display = 'none';
        }

        // Cerrar el modal (usando Bootstrap 5)
        let modalElement = document.getElementById('modalQuiz');
        let modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });
});