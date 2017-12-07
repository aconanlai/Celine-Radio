export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'PLAY_PODCAST':
      return {
        ...state,
        isPlaying: 'VOMINOS',
      };
    case 'PAUSE_PODCAST':
      return {
        ...state,
        isPLaying: false,
      };
    default:
      return state;
  }
}

export const playPodcast = () => {
  return {
    type: 'PLAY_PODCAST',
  };
};

export const pausePodcast = () => {
  return {
    type: 'PAUSE_PODCAST',
  };
};