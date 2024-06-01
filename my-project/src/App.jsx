import React, { useState, useEffect } from "react";
import NoteQuiz from "./components/NoteQuiz";
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
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = generateOptions(currentQuestion.correct); // Generate options dynamically
  console.log("Current Question:", currentQuestion); // Log current question for debugging

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
    <div className="app-container">
      <div className="question-number">
        Fråga {currentQuestionIndex + 1} av {questions.length}
      </div>
      <h1>Learn Notes</h1>
      <div className="noter">
        <NoteQuiz
          correct={currentQuestion.correct}
          image={currentQuestion.image}
          options={options}
          onAnswerSelected={handleAnswerSelected}
          questionNumber={currentQuestionIndex + 1}
        />
        {feedback && <p>{feedback}</p>}
        <button onClick={handleNextQuestion}>Nästa fråga</button>
      </div>
    </div>
  );
}

const generateOptions = (correct) => {
  const allNotes = ["A", "B", "C", "D", "E", "F", "G"];
  const options = [];

  while (options.length < 3) {
    const randomNote = allNotes[Math.floor(Math.random() * allNotes.length)];
    if (randomNote !== correct && !options.includes(randomNote)) {
      options.push(randomNote);
    }
  }

  options.push(correct);
  return shuffleArray(options);
};

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default App;
