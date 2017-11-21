import React from 'react';



const Audio = ({ uri, isPlaying }) => {



    return (
        <div className="audio-source">
            {isPlaying ? this.audio.play() : this.audio.pause()}
            <audio
                src={uri}
                ref={(audio) => { this.audio = audio }}
              
            />
            
            <div className="progress-bar">
            </div>
        </div>
    )
}

export default Audio;

