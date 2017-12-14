import React, { Component } from 'react';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying';
import './NowPlaying.css';

class NowPlayingContainer extends Component {
  render() {
    return (
      <NowPlaying
        title={this.props.title}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
    title: state._audio.title,
  };
};

export default connect(mapStateToProps)(NowPlayingContainer);
