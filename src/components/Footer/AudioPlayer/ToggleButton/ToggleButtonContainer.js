import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from './ToggleButton';
import {
  playAudio,
  pauseAudio
} from '../../../../redux/modules/audio';

class ToggleButtonContainer extends Component {
  toggle = () => {
    if (this.props.isPlaying) {
      this.props.pauseAudio();
    } else {
      this.props.playAudio();
    }
  };

  render() {
    if (this.props.filePath) {
      return (<ToggleButton
        isPlaying={this.props.isPlaying}
        toggle={this.toggle}
      />
      );
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    isPlaying: state._audio.isPlaying,
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps, { playAudio, pauseAudio, })(ToggleButtonContainer);

