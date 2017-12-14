import { apiPath } from '../../config';

export default function reducer(state = {
  keywords: [],
  isFetching: true,
  selectedKeyword: null,
}, action = {}) {
  switch (action.type) {
    case 'REQUEST_KEYWORDS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_KEYWORDS':
      return {
        ...state,
        isFetching: false,
        keywords: action.keywords,
      };
    case 'SELECT_KEYWORD':
      return {
        ...state,
        selectedKeyword: action.value,
      };
    default:
      return state;
  }
}

export const requestKeywords = () => {
  return {
    type: 'REQUEST_KEYWORDS',
  };
};

export const receiveKeywords = (keywords) => {
  return {
    type: 'RECEIVE_KEYWORDS',
    keywords,
  };
};

export const fetchKeywords = () => {
  // TODO: create an http wrapper so all actions can share
  // error handling
  return (dispatch) => {
    dispatch(requestKeywords());
    return fetch(`${apiPath}keywords`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(receiveKeywords(json));
    });
  };
};

export const selectKeyword = (keyword) => {
  return {
    type: 'SELECT_KEYWORD',
    value: keyword,
  };
};
