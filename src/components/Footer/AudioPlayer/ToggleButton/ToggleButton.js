import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ToggleButton.css';

const ToggleButton = (props) => {
  return (
    <div>
      <i onClick={props.toggle} className={!props.isPlaying ? 'fa fa-play controls' : 'fa fa-pause controls'} />
    </div>
  );
};

export default ToggleButton;
