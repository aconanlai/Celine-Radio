import React from 'react';
import './PlayerDashBoard.css';
import PlayerToggleContainer from '../PlayerControls/PlayerToggle/PlayerToggleContainer';
// import PlayerVolumeContainer from '../PlayerControls/PlayerVolume/PlayerVolumeContainer';
// import ProgressBarContainer from '../PlayerControls/ProgressBar/ProgressBarContainer';

const PlayerDashBoard = (props) => {
  return (
    <div className="player">
      <div className="controls">
        <PlayerToggleContainer
          audioPathAws={props.audioPathAws}
          isPlaying={props.isPlaying}
          updateIsPlayingTrue={props.updateIsPlayingTrue}
          updateIsPlayingFalse={props.updateIsPlayingFalse}
        />
        {/* {ProgressBarContainer } */}
        {/* {PlayerVolumeContainer} */}
      </div>
    </div>
  );
};

export default PlayerDashBoard;
