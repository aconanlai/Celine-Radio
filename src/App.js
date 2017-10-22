import React, { Component } from 'react';
import List from './List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Welcome to Hell
        </div>
        <List />
      </div>
    );
  }
}

export default App;
