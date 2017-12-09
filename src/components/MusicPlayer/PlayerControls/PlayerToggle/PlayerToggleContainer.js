import React, { Component } from 'react';
import PlayerToggle from './PlayerToggle';
import { connect } from 'react-redux';
import {
  playAudio,
  pauseAudio
} from '../../../../redux/modules/audio';

class PlayerToggleContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.toggle = this.toggle.bind(this);
  // }

  toggle = () => {
    if (this.props.isPlaying) {
      this.props.pauseAudio();
    } else {
      this.props.playAudio();
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
const mapStateToProps = (state) => {
  return {
    isPlaying: state._audio.isPlaying,
  };
};

export default connect(mapStateToProps, { playAudio, pauseAudio, })(PlayerToggleContainer);

