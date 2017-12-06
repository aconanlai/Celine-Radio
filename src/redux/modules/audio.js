export default function _audio(state = {}, action) {
  switch (action.type) {
    case 'PLAY_PODCAST':
      return {
        ...state,
        source: 'playPodcast',
      };
    case 'PAUSE_PODCAST':
      return {
        ...state,
        source: 'pausedPodcast',
      };
    default:
      return state;
  }
}
