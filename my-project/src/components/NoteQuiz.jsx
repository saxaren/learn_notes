const NoteQuiz = () => {
  console.log("NoteQuiz");
  return (
    <div>
      <p>Hello World!</p>

      <p>Vilken not är det här?</p>

      <p id="question" style={{ fontFamily: "Lassus-7BRA" }}>
        %
      </p>
      <div>
        <p>välj rätt svar</p>
        <label>
          <input type="radio" name="answer" value="a" />
          Alternativ A
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="a" />
          Alternativ B
        </label>
        <br />

        <label>
          <input type="radio" name="answer" value="a" />
          Alternativ C
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="a" />
          Alternativ D
        </label>
        <br />
      </div>
    </div>
  );
};

export default NoteQuiz;
