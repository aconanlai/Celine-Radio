export default function reducer(state = 'en', action = {}) {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return state === 'en' ? 'fr' : 'en';
    default:
      return state;
  }
}

export const toggleLanguage = () => {
  return {
    type: 'TOGGLE_LANGUAGE',
  };
};

