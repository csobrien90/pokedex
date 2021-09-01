import "./App.css";
import { useState } from "react"; //Allows us to set and reset attributes in data
import Home from "./components/Home";

function App() {
  const [offset, setOffset] = useState(null);

  function next() {
    if (offset) {
      let nextBatch = offset + 20;
      setOffset(nextBatch);
    } else {
      setOffset(20);
    }
  }

  function prev() {
    if (offset) {
      let nextBatch = offset - 20;
      setOffset(nextBatch);
    }
  }

  return (
    <div>
      <h1>Hello Pokemon Trainers!</h1>
      <p>Use the Next and Prev button to step through the pokemon. I may not know many beyond the original 151 (including Mew of 
        course), but they're all there!</p>
      <div id="nav">
        {offset && <button onClick={prev}>Previous</button>}
        <button onClick={next}>Next</button>
      </div>
      <Home offset={offset} />
    </div>
  );
}

export default App;
