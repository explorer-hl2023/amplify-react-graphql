import React from 'react';
import logo from './logo.svg';
import './App.css';

function Mybutton(){

  return(

    <button>
      I'm a dummy button
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello from V2</h1>
        <h2>Hello from V3</h2>
        <Mybutton />
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
