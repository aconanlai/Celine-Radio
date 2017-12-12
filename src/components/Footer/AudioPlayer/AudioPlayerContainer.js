import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';


class AudioPlayerContainer extends Component {


  render() {
    console.log(this.props);
    return (
      < AudioPlayer
        filePath={this.props.filePath}
      />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
    // Here we will import our title state
  };
};
export default connect(mapStateToProps)(AudioPlayerContainer);
