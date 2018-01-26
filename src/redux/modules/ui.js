export default function reducer(state = {
  isMobile: false,
  isLogoHidden: false,
}, action = {}) {
  switch (action.type) {
    case 'SET_MOBILE_STATUS':
      return {
        ...state,
        isMobile: true,
      };
    case 'HIDE_LOGO':
      return {
        ...state,
        isLogoHidden: true,
      };
    default:
      return state;
  }
}

export const setMobileStatus = () => {
  return {
    type: 'SET_MOBILE_STATUS',
  };
};

export const hideLogo = () => {
  return {
    type: 'HIDE_LOGO',
  };
};

