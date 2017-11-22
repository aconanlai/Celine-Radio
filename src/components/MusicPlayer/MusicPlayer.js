import React, { Component } from 'react';
import Audio from '../Audio/Audio'

import 'font-awesome/css/font-awesome.min.css';
import './MusicPlayer.css';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    console.log('test push')

    this.playAndPauseButton = (e) => {
      if (this.state.isPlaying) {
        this.setState({ isPlaying: false, });
        // this.audio.pause();
      } else {
        this.setState({ isPlaying: true, });
        // this.audio.play();
      }
    };
  }
  render() {
    return (
      <div className="player">
        <div className="controls">
          <i onClick={this.playAndPauseButton} className={!this.state.isPlaying ? "fa fa-play controls" : "fa fa-pause controls"} />
        </div>
        <Audio
          uri={this.props.audio}
          isPlaying={this.state.isPlaying}

          
          />
      </div>
    );
  }
}

export default MusicPlayer;
