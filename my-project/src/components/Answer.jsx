import PropTypes from "prop-types";

const Answer = ({
  options,
  // correctAnswer,
  selectedAnswer,
  onAnswerSelected,
  questionNumber,
  answerSubmitted,
}) => {
  console.log("Answer options:", options);

  const answerOptionStyle = {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "0 5px",
  };

  const answerOptionsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <p>Välj rätt svar:</p>
      <div style={answerOptionsContainerStyle}>
        {options.map((option, index) => (
          <div key={index} style={answerOptionStyle}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswerSelected(option)}
                disabled={answerSubmitted}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <p style={{ color: "orange" }}>Fråga nummer {questionNumber}</p>
    </div>
  );
};

Answer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.string,
  onAnswerSelected: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  answerSubmitted: PropTypes.bool.isRequired,
};

Answer.defaultProps = {
  selectedAnswer: "",
};

export default Answer;
