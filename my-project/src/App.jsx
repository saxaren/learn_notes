import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HighScores from "./pages/HighScores";
import styled from "styled-components";
// import WelcomePage from './WelcomePage'
// import Quiz from './Quiz'
// import Answer from './components/Answer';

import NoteQuiz from "./components/NoteQuiz";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("./questions.json");
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
  const options = generateOptions(currentQuestion.correct); // Generera alternativ dynamiskt

  console.log("Answer options in app.jsx:", options);

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback("Rätt!");
      setScore((prevScore) => prevScore + 1);
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
      saveHighScore();
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  //spara Highscore

  const saveHighScore = () => {
    const name = prompt("Enter your name for the high score list:");
    if (name) {
      const newScore = { name, score };
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      highScores.push(newScore);
      highScores.sort((a, b) => b.score - a.score);
      highScores.splice(5); // Keep only top 5 scores
      localStorage.setItem("highScores", JSON.stringify(highScores));
    }
  };

  // Generera alternativ dynamiskt
  function generateOptions(correct) {
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
  }

  // Blanda array
  function shuffleArray(array) {
    let shuffledArray = array.slice(); // Skapa en kopia av arrayen
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Quiz</Link>
            </li>
            <li>
              <Link to="/highscores">High Scores</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="question-heading">Learn Notes</h1>
                <div className="question-number">
                  Fråga {currentQuestionIndex + 1} av {questions.length}
                </div>

                <div className="noter">
                  <NoteQuiz
                    correct={currentQuestion.correct}
                    image={currentQuestion.image}
                    options={options}
                    onAnswerSelected={handleAnswerSelected}
                    questionNumber={currentQuestionIndex + 1}
                    selectedAnswer={selectedAnswer || ""} // ska aldrig bli null
                  />
                  {feedback && <p>{feedback}</p>}
                  <button onClick={handleNextQuestion}>Nästa fråga</button>
                </div>
              </div>
            }
          />
          <Route path="/highscores" element={<HighScores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
