import React from 'react';
import './AboutButton.css';

const AboutButton = (props) => {
  return (
    <div
      className="about-button"
      onClick={props.openAbout}
    >
      ???
    </div>
  );
};

export default AboutButton;
