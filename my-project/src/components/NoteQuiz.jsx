import React from "react";
import Answer from "./Answer";

const NoteQuiz = ({ note, image, options, onAnswerSelected }) => {
  return (
    <div>
      <p>Vilken not är det här?</p>
      <img src={image} alt={`Not ${note}`} />
      <Answer options={options} onAnswerSelected={onAnswerSelected} />
    </div>
  );
};

export default NoteQuiz;
