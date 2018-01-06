import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div>
      <div id="progress">
        <div id="bar">
          <div id="handle" />
        </div>
      </div>
      <div className="" id="time">
        <span id="current-time">0:00</span> /
        <span id="full-duration">0:00</span>
      </div>
    </div>
  );
};

export default ProgressBar;
