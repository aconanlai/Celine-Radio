import { apiPath } from '../../config';

export default function reducer(state = {
  shows: {},
  isFetching: true,
}, action = {}) {
  switch (action.type) {
    case 'REQUEST_EPISODES':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_EPISODES':
      return {
        ...state,
        isFetching: false,
        shows: {
          ...state.shows,
          [action.show]: action.episodes,
        },
      };
    default:
      return state;
  }
}

export const requestEpisodes = () => {
  return {
    type: 'REQUEST_EPISODES',
  };
};

export const receiveEpisodes = (show, episodes) => {
  return {
    type: 'RECEIVE_EPISODES',
    show,
    episodes,
  };
};

export const fetchEpisodes = (show) => {
  // TODO: create an http wrapper so all actions can share
  // error handling

  return (dispatch, getState) => {
    if (!getState()._episodes.shows[show]) {
      dispatch(requestEpisodes());
      return fetch(`${apiPath}episodes?filter[taxonomy]=show&filter[term]=${show}&per_page=100`).then((response) => {
        return response.json();
      }).then((json) => {
        dispatch(receiveEpisodes(show, json));
      });
    }
    return null;
  };
};
