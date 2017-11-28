import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './PlayerToggle.css';

const PlayerToggle = (props) => {
  return (
    <i onClick={props.toggle} className={!props.isPlaying ? 'fa fa-play controls' : 'fa fa-pause controls'} />
  );
};

export default PlayerToggle;
