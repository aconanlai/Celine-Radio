import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './MusicPlayer.css';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };

    this.playButton = (e) => {
      this.setState({
        isPlaying: true,
      });
    };

    this.pauseButton = () => {
      this.setState({
        isPlaying: false,
      });
    };
  }


  render() {
    return (
      <div className="player">
        <div className="controls">
          {(this.state.isPlaying) ?
            <i onClick={this.pauseButton} className="fa fa-pause controls" aria-hidden="true" /> :
            <i onClick={this.playButton} className="fa fa-play controls" aria-hidden="true" />}
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
