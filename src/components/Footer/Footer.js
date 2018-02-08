import React from 'react';
import './Footer.css';
import AudioPlayerContainer from './AudioPlayer/AudioPlayerContainer';
import LanguageTranslatorContainer from './LanguageToggler/LanguageTogglerContainer';
import AboutButtonContainer from './AboutButton/AboutButtonContainer';

const Footer = () => {
  return (
    <div className="footer">
      <AudioPlayerContainer />
      <AboutButtonContainer />
      <LanguageTranslatorContainer />
    </div>
  );
};
export default Footer;

