import './App.css';
import React, { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
