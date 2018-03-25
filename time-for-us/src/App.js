import React, { Component } from 'react';
import './App.css';

import { BackgroundImage } from './components/BackgroundImage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className=".App-title"> Time For Us </h1>
        </header>
        <p className="App-intro">
          This app allows one person to see what the current time is for a person in another location.
        </p>
        <BackgroundImage keyword="sydney"/>
        <BackgroundImage keyword="new york"/>
      </div>
    );
  }
}

export default App;
