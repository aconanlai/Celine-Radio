import React from 'react';
import { connect } from 'react-redux';
import './Logo.css';
import logo from './logo.png';

const Logo = (props) => {
  return (
    <img
      className={`logo${(props.isMobile && props.isLogoHidden) ? ' hidden' : ''}`}
      src={logo}
      alt="Archives Audio Montreal"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isMobile: state._ui.isMobile,
    isLogoHidden: state._ui.isLogoHidden,
  };
};

export default connect(mapStateToProps)(Logo);
