export default function reducer(state = {
  isPlaying: false,
  filePath: '',
  title: '',
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
    case 'NOW_PLAYING':
      return {
        ...state,
        title: action.title,
      };
    case 'LOAD_NEW_FILE':
      return {
        ...state,
        isPlaying: true,
        filePath: action.path,
        title: action.title,
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

export const loadNewFile = (path, title) => {
  return {
    type: 'LOAD_NEW_FILE',
    path,
    title,
  };
};
