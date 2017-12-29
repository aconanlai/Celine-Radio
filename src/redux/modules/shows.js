import { apiPath } from '../../config';

export default function reducer(state = {
  shows: [],
  selectedShow: null,
  isFetching: true,
}, action = {}) {
  switch (action.type) {
    case 'REQUEST_SHOWS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_SHOWS':
      return {
        ...state,
        isFetching: false,
        shows: action.shows,
      };
    case 'SELECT_SHOW':
      return {
        ...state,
        selectedShow: action.show,
      };
    default:
      return state;
  }
}

export const requestShows = () => {
  return {
    type: 'REQUEST_SHOWS',
  };
};

export const receiveShows = (shows) => {
  return {
    type: 'RECEIVE_SHOWS',
    shows,
  };
};

export const fetchShows = () => {
  // TODO: create an http wrapper so all actions can share
  // error handling
  return (dispatch) => {
    dispatch(requestShows());
    return fetch(`${apiPath}show`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(receiveShows(json));
    });
  };
};

export const selectShow = (show) => {
  return {
    type: 'SELECT_SHOW',
    show,
  };
};
