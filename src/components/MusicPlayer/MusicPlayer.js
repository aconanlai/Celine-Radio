import React, { Component } from 'react';
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
        <div>
          <img src="https://image.flaticon.com/icons/svg/0/375.svg" width="20" height="20" onClick={this.playButton} />
        </div>


      );
    }
    return (
      <div>
        <img src="https://cdn3.iconfinder.com/data/icons/line/36/pause-512.png" width="20" height="20" onClick={this.pauseButton} />
      </div>

    );
  }
}

export default MusicPlayer;
