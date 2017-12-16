import React from 'react';
import { connect } from 'react-redux';
import LanguageToggler from './LanguageToggler';
import { toggleLanguage } from '../../../redux/modules/language';

const LanguageTogglerContainer = (props) => {
  return <LanguageToggler {...props} />;
};

const mapStateToProps = (state) => {
  return {
    language: state._language,
  };
};

export default connect(mapStateToProps, { toggleLanguage, })(LanguageTogglerContainer);

