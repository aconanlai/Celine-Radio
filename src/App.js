import React, { Component } from 'react';
import List from './list/list.js';
import Footer from './Footer/Footer.js'



import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <List />
      <Footer />
      </div>
    
    );
  }
}

export default App;
