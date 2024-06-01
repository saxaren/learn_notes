import React from "react";
import Answer from "./Answer";

const NoteQuiz = ({
  correct,
  image,
  options,
  onAnswerSelected,
  questionNumber,
}) => {
  console.log("NoteQuiz options:", options); // Log options for debugging

  return (
    <div>
      <p>Vilken not är det här?</p>
      <img src={image} alt={`Not ${correct}`} />
      {options && (
        <Answer
          options={options}
          correctAnswer={correct}
          onAnswerSelected={onAnswerSelected}
          questionNumber={questionNumber}
        />
      )}
    </div>
  );
};

export default NoteQuiz;
