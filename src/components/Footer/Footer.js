import React from 'react';
import './Footer.css';
import AudioPlayerContainer from './AudioPlayer/AudioPlayerContainer';
import LanguageTranslatorContainer from './LanguageToggler/LanguageTogglerContainer';

const Footer = () => {
  return (
    <div className="footer">
      <AudioPlayerContainer />
      <LanguageTranslatorContainer />
    </div>
  );
};
export default Footer;

