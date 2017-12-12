import React from 'react';
import './Footer.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import LanguageTranslatorContainer from './LanguageTranslator/LanguageTranslatorContainer'

const Footer = () => {
  return (
    <div className="footer">
      <AudioPlayer />
      <LanguageTranslatorContainer />
    </div>
  );
};
export default Footer;
