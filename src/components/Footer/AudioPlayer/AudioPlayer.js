import React, { Component } from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

// I guess we should make this into a class that allows us to create if logic to render both Toggle and NowPlaying
const AudioPlayer = () => (
  <div>
    <ToggleButtonContainer />
    <Audio />
  </div>
);

export default AudioPlayer;
