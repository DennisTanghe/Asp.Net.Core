import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState("boe");

  fetch('https://localhost:7225/api/Test')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setText(data.test);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        {text}
      </article>
    </div>
  );
}

export default App;
