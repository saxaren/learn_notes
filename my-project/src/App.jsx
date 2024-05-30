import React, { useState, useEffect } from "react";
import NoteQuiz from "./components/NoteQuiz";
// import Answer from "./components/Answer";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const shuffledQuestions = shuffleArray(data);
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  if (questions.length === 0) {
    return <div>Loading...</div>; // Visa laddningsmeddelande medan data hämtas
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback("Rätt!");
    } else {
      setFeedback("Fel, försök igen!");
    }
  };

  const handleNextQuestion = () => {
    setFeedback("");
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div>
      <h1>Learn Notes</h1>
      <div className="noter">
        <NoteQuiz
          note={currentQuestion.note}
          image={currentQuestion.image}
          options={currentQuestion.options}
          onAnswerSelected={handleAnswerSelected}
        />
        {feedback && <p>{feedback}</p>}
        <button onClick={handleNextQuestion}>Nästa fråga</button>
      </div>
    </div>
  );
}

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Skapa en kopia av arrayen
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default App;
