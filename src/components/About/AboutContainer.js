import React from 'react';
import { connect } from 'react-redux';
import About from './About';
import {
  closeAbout
} from '../../redux/modules/ui';

const AboutContainer = (props) => {
  return (
    <About {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    isAboutOpen: state._ui.isAboutOpen,
  };
};

export default connect(mapStateToProps, { closeAbout, })(AboutContainer);
