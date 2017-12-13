import React, { Component } from 'react';
import { connect } from 'react-redux';
import LanguageTranslator from './LanguageTranslator';
import './LanguageTranslator.css';

class LanguageTranslatorContainer extends Component {
  //WIP: Create redux actions and reducers to manage Language Toggle State
  render() {
    return (
      <LanguageTranslator
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state._audio.isPlaying,
    src: state._audio.filePath,
  };
};

export default connect(mapStateToProps)(LanguageTranslatorContainer);