import { apiPath } from '../../config';

export default function reducer(state = {
  keywords: {},
  keywordsArray: [],
  selectedKeyword: null,
}, action = {}) {
  switch (action.type) {
    case 'RECEIVE_KEYWORDS':
      return {
        ...state,
        isFetching: false,
        keywords: action.keywords,
        keywordsArray: action.keywordsArray,
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

export const receiveKeywords = (keywords) => {
  const normalizedKeywords = keywords.reduce((acc, keyword) => {
    return {
      ...acc,
      [keyword.id]: keyword,
    };
  }, {});
  return {
    type: 'RECEIVE_KEYWORDS',
    keywords: normalizedKeywords,
    keywordsArray: keywords,
  };
};

export const fetchKeywords = () => {
  // TODO: create an http wrapper so all actions can share
  // error handling
  return (dispatch) => {
    return fetch(`${apiPath}keyword`).then((response) => {
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
