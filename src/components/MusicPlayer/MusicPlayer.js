import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import AudioSource from '../Audio/AudioSource';

import './MusicPlayer.css';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.toggle = (e) => {
      if (this.state.isPlaying) {
        this.setState({ isPlaying: false, });
      } else {
        this.setState({ isPlaying: true, });
      }
    };
  }
  render() {
    return (
      <div className="player">
        <div className="controls">
          <i onClick={this.toggle} className={!this.state.isPlaying ? 'fa fa-play controls' : 'fa fa-pause controls'} />
        </div>
        <div className="audio-source">
          <AudioSource
            audioPath={this.props.audioPath}
            isPlaying={this.state.isPlaying}
          />

        </div>

      </div>
    );
  }
}
//

export default MusicPlayer;
