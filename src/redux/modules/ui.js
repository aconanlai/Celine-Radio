export default function reducer(state = {
  isMobile: false,
  isLogoHidden: false,
  isAboutOpen: false,
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
    case 'OPEN_ABOUT':
      return {
        ...state,
        isAboutOpen: true,
      };
    case 'CLOSE_ABOUT':
      return {
        ...state,
        isAboutOpen: false,
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

export const openAbout = () => {
  return {
    type: 'OPEN_ABOUT',
  };
};

export const closeAbout = () => {
  return {
    type: 'CLOSE_ABOUT',
  };
};
