import React from "react";
import Answer from "./Answer";

const NoteQuiz = ({ correct, image, onAnswered }) => {
  const options = generateOptions(correct);

  return (
    <div>
      <p>Vilken not är det här?</p>
      <img src={image} alt={`Not ${correct}`} />
      <Answer options={options} onAnswerSelected={onAnswered} />
    </div>
  );
};

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
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default NoteQuiz;
