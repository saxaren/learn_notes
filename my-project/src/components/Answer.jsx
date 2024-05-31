import React from "react";

const Answer = ({ options, onAnswerSelected, questionNumber }) => {
  const answerOptionStyle = {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "10px",
  };

  const answerOptionsStyle = {
    display: "flex",
  };

  return (
    <div>
      <p>Välj rätt svar:</p>
      <p>fråga nummer {questionNumber}</p>
      <div style={answerOptionsStyle}>
        {options.map((option, index) => (
          <div key={index} style={answerOptionStyle}>
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
