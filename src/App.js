import React from 'react';
import Me from './Me.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={Me} className="App-logo" alt="Me" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
