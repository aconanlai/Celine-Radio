import React, { Component } from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

const AudioPlayer = () => (
  <div>
    <ToggleButtonContainer />
    <Audio />
  </div>
);

export default AudioPlayer;
