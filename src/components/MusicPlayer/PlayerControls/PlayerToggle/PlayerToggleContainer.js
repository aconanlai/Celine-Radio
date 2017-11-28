import React, { Component } from 'react';
import PlayerToggle from './PlayerToggle';


class PlayerToggleContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    if (this.props.isPlaying) {
      this.props.updateIsPlayingFalse();
    } else {
      this.props.updateIsPlayingTrue();
    }
  };

  render() {
    return (
      <PlayerToggle
        isPlaying={this.props.isPlaying}
        toggle={this.toggle}
      />

    );
  }
}

export default PlayerToggleContainer;
