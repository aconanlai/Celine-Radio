import React, { Component } from 'react';
import PlayerDashBoard from './PlayerDashBoard';
import Audio from '../../Audio/Audio';

class PlayerDashBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.updateIsPlayingTrue = this.updateIsPlayingTrue.bind(this);
    this.updateIsPlayingFalse = this.updateIsPlayingFalse.bind(this);
    this.state = {
      isPlaying: false,
      podcastFile: 'https://s3.amazonaws.com/celinebureauradio/Tetris%20Rap%20by%20DaCaV5.mp3',
    };
  }
  updateIsPlayingTrue = () => {
    this.setState({
      isPlaying: true,
    });
  };

  updateIsPlayingFalse = () => {
    this.setState({ isPlaying: false, });
  };
  render() {
    return (
      <div>
        <PlayerDashBoard
          isPlaying={this.state.isPlaying}
          updateIsPlayingTrue={this.updateIsPlayingTrue}
          updateIsPlayingFalse={this.updateIsPlayingFalse}
        />
        <Audio
          isPlaying={this.state.isPlaying}
          podcastFile={this.state.podcastFile}
        />
      </div>
    );
  }
}

export default PlayerDashBoardContainer;
