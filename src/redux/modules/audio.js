export default function reducer(state = {
  isPlaying: false,
  filePath: 'https://s3.amazonaws.com/celinebureauradio/Tetris%20Rap%20by%20DaCaV5.mp3',
}, action = {}) {
  switch (action.type) {
    case 'PLAY_AUDIO':
      return {
        ...state,
        isPlaying: true,
      };
    case 'PAUSE_AUDIO':
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
}

export const playAudio = () => {
  return {
    type: 'PLAY_AUDIO',
  };
};

export const pauseAudio = () => {
  return {
    type: 'PAUSE_AUDIO',
  };
};
