import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from '../AudioPlayer/NowPlaying/NowPlayingContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css';



class AudioPlayer extends Component {

  render() {
    return (
      <div className="audio-player">
        {this.props.filePath &&
          <div className="audio-player" >
            <ToggleButtonContainer />
            <NowPlayingContainer />
            <Audio />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps)(AudioPlayer);