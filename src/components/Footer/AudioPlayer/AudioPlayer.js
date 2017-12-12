import React from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from '../AudioPlayer/NowPlaying/NowPlayingContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

const AudioPlayer = () => (
  <div className="audio-player">
    <ToggleButtonContainer />
    <NowPlayingContainer />
    <Audio />
  </div>
);

export default AudioPlayer;
