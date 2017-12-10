export default function reducer(state = {
  isPlaying: false,
  filePath: '',
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
    case 'LOAD_NEW_FILE':
      return {
        ...state,
        isPlaying: true,
        filePath: action.path,
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

export const loadNewFile = (path) => {
  return {
    type: 'LOAD_NEW_FILE',
    path,
  };
};
