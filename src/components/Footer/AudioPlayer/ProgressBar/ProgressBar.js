import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
  // I see lint errors here so disreard -  contemplating how i'm going to use onclick seeking- this must require some state i belevie?

  render() {
    return (
      <div>
        <canvas id="progress" width="400" height="20" />
        <span id="current-time">0:00 </span> /
      <span id="full-duration">0:00</span>
      </div >

    );
  }
}

export default ProgressBar;
