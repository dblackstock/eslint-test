import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const anotherTest = () => {
    const someThing = "words agains";
    console.log(someThing);
  };

  const testFunction = () => {
    const anObject = { key: "words" };
    return anObject.key;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {testFunction}
          {anotherTest}
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
