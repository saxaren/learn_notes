import { useEffect, useState } from "react";

const HighScores = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(scores);
  }, []);

  // Dummy data for high scores
  // const highScores = [
  //   { name: "Alice", score: 100 },
  //   { name: "Bob", score: 80 },
  //   { name: "Charlie", score: 60 },
  // ];

  return (
    <div className="high-scores-container">
      <h1>High Scores</h1>
      {highScores.length > 0 ? (
        <ul>
          {highScores.map((entry, index) => (
            <li key={index}>
              {entry.name}: {entry.score}
            </li>
          ))}
        </ul>
      ) : (
        <p>No high scores yet!</p>
      )}
    </div>
  );
};

export default HighScores;
