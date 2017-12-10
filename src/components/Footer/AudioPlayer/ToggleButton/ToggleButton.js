import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ToggleButton.css';

const ToggleButton = (props) => {
  return (
    <i onClick={props.toggle} className={!props.isPlaying ? 'fa fa-play controls' : 'fa fa-pause controls'} />
  );
};

export default ToggleButton;
