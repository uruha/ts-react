import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Invitation } from './components/Invitation';
import { Counter } from './components/Context';
import HooksCounter from './components/Hooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Invitation compiler='Typescript' framework='React' />
          <Counter />
          <HooksCounter initialCount={0} />
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
}

export default App;
