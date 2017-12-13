import React from 'react';
import './LanguageTranslator.css';

const LanguageTranslator = (props) => {
  return (
  <i className="language-toggle">EN/FR</i> 
    // Note to jamal: Use thame same logic as you did bellow for toggle only accept make the values strings 
    // <i onClick={props.toggle} className={!props.isPlaying ? 'fa fa-play controls' : 'fa fa-pause controls'} />
  );
};

export default LanguageTranslator;
