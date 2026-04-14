function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <p>1. ¿Cuál es un verbo de rutina?</p>
    <button onclick="alert('Correcto!')">Have breakfast</button>
    <button onclick="alert('Intenta de nuevo')">Running fast</button>

    <p>2. ¿Qué adverbio indica que algo nunca ocurre?</p>
    <button onclick="alert('Correcto!')">Never</button>
    <button onclick="alert('Intenta de nuevo')">Always</button>
  `;
}
