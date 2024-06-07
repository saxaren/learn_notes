// import React from "react";
import Answer from "./Answer";
import PropTypes from "prop-types";
import styled from "styled-components";

const NoteQuiz = ({
  correct,
  image,
  options,
  onAnswerSelected,
  questionNumber,
  selectedAnswer,
}) => {
  console.log("Options:", options);

  return (
    <div>
      <p>Vilken not är det här?</p>
      <img src={image} alt={`Not ${correct}`} />
      <Answer
        options={options}
        correctAnswer={correct}
        onAnswerSelected={onAnswerSelected}
        questionNumber={questionNumber}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
};

NoteQuiz.propTypes = {
  correct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.string,
};

export default NoteQuiz;
