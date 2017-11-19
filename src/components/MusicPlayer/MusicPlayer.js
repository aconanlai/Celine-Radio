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
    if (!this.state.isPlaying) {
      return (
        <div className="player">
          <div className="controls">
            <a><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
            <a onClick={this.playButton}><i className="fa fa-play" aria-hidden="true"></i></a>
            <a><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
          </div>
        </div>
      );
    }
    return (
      <div className="player">
        <div className="controls">
          <a><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
          <a onClick={this.pauseButton}><i className="fa fa-pause" aria-hidden="true"></i></a>
          <a><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
