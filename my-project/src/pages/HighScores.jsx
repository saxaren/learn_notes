import React from "react";

const HighScores = () => {
  // Dummy data for high scores
  const highScores = [
    { name: "Alice", score: 100 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 60 },
  ];

  return (
    <div>
      <h1>High Scores</h1>
      <ul>
        {highScores.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScores;
