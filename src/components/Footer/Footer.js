import React from 'react';
import './Footer.css';
import AudioPlayerContainer from './AudioPlayer/AudioPlayerContainer';
import LanguageTranslatorContainer from './LanguageTranslator/LanguageTranslatorContainer'

const Footer = () => {
  return (
    <div className="footer">
      <AudioPlayerContainer />
      <LanguageTranslatorContainer />
    </div>
  );
};
export default Footer;

