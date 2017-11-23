import React from 'react';
import './Footer.css';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const Footer = () => {
  return (
    <div className="footer">
      <MusicPlayer audioPath="https://s3.amazonaws.com/celinebureauradio/Tetris%20Rap%20by%20DaCaV5.mp3" />
    </div>
  );
};

export default Footer;
