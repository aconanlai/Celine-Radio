import React from 'react';
import './About.css';

const About = (props) => {
  return props.isAboutOpen &&
    <div className="about-modal marching-ants">
      <div
        className="modal-close-button"
        onClick={props.closeAbout}
      >
        X
      </div>
      LOL HI
    </div>;
};

export default About;
