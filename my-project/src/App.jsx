import { useState } from "react";
import NoteQuiz from "./components/NoteQuiz";
import Answer from "./components/Answer";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>learn notes</h1>
      <div className="noter">
        <p>Övningar</p>

        <p>
          <NoteQuiz />
          {/* <Answer /> */}
        </p>
        <img src="./src/images/C-Major-Scale_cut.jpg" alt="" />
      </div>

      <p className="read-the-docs">click to send a mail</p>
    </>
  );
}

export default App;

{
  /* <div className="card">

<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div> */
}
