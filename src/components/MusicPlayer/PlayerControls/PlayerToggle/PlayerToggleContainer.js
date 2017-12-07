import React, { Component } from 'react';
import PlayerToggle from './PlayerToggle';
import { connect } from 'react-redux';
import {
  playPodcast
} from '../../../../redux/modules/audio';




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
    console.log(this.props);
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
    ReduxState: state
  };
};

export default connect(mapStateToProps, playPodcast)(PlayerToggleContainer);

