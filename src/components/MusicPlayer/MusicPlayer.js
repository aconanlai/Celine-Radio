import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './MusicPlayer.css';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };

    this.playAndPauseButton = (e) => {
      if (this.state.isPlaying) {
        this.setState({ isPlaying: false, });
        this.audio.pause();
      } else {
        this.setState({ isPlaying: true, });
        this.audio.play();
      }
    };
  }
  render() {
    return (
      <div className="player">
        <div className="controls">
          <i onClick={this.playAndPauseButton} className={!this.state.isPlaying ? "fa fa-play controls" : "fa fa-pause controls"} />
        </div>
        <audio src={this.props.audio}
          ref={(audio) => { this.audio = audio }}
        />
      </div>
    );
  }
}

export default MusicPlayer;
