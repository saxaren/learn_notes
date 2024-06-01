import React from "react";

const Answer = ({ options, onAnswerSelected, questionNumber }) => {
  console.log("Answer options:", options); // Log options for debugging

  return (
    <div>
      <p>Välj rätt svar:</p>
      <p>Fråga nummer {questionNumber}</p>
      <div style={{ display: "flex" }}>
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => onAnswerSelected(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answer;
