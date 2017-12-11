import React from 'react';
import './Footer.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import NowPlayingContainer from './AudioPlayer/NowPlaying/NowPlayingContainer'
import LanguageTranslatorContainer from './LanguageTranslator/LanguageTranslatorContainer'


const Footer = () => {
  return (
    <div className="footer">
      <AudioPlayer />
      <NowPlayingContainer />
      <LanguageTranslatorContainer />
    </div>
  );
};

export default Footer;
