import React from 'react';
import { connect } from 'react-redux';
import { openAbout } from '../../../redux/modules/ui';
import AboutButton from './AboutButton';

const AboutButtonContainer = (props) => {
  return <AboutButton {...props} />;
};

export default connect(null, { openAbout, })(AboutButtonContainer);

