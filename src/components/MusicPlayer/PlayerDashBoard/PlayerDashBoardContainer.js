import React, { Component } from 'react';
import PlayerDashBoard from './PlayerDashBoard';


class PlayerDashBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.updateIsPlayingTrue = this.updateIsPlayingTrue.bind(this);
    this.updateIsPlayingFalse = this.updateIsPlayingFalse.bind(this);
    this.state = {
      isPlaying: false,
      audioPathAws: 'https://s3.amazonaws.com/celinebureauradio/Tetris%20Rap%20by%20DaCaV5.mp3',
    };
  }

  componentWillUpdate() {
    if (this.state.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  updateIsPlayingTrue = () => {
    this.setState({
      isPlaying: true,
    });
  };

  updateIsPlayingFalse = (e) => {
    this.setState({ isPlaying: false, });
  };

  render() {
    return (
      <div>
        <PlayerDashBoard
          audioPathAws={this.state.audioPathAws}
          isPlaying={this.state.isPlaying}
          updateIsPlayingTrue={this.updateIsPlayingTrue}
          updateIsPlayingFalse={this.updateIsPlayingFalse}
        />
        <audio
          src={this.state.audioPathAws}
          ref={(audio) => { this.audio = audio }} />
      </div>
    );
  }
}

export default PlayerDashBoardContainer;
