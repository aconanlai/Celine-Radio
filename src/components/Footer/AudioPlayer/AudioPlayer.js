import React from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from '../AudioPlayer/NowPlaying/NowPlayingContainer';
import ProgressBar from '../AudioPlayer/ProgressBar/ProgressBar';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  return (
    <div className="audio-player">
      <div className="audio-player" >
        <ToggleButtonContainer />
        <ProgressBar />
        <NowPlayingContainer />
        <Audio />
      </div>
    </div>
  );
};

export default AudioPlayer;
