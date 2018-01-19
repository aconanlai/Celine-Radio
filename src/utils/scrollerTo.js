import scrollIntoView from 'scroll-into-view';

const scrollToFactory = (className) => {
  return () => {
    const element = document.querySelectorAll(`.${className}`)[0];
    // classToScrollTo.scrollIntoView();
    scrollIntoView(element, {
      time: 500,
      ease: (value) => {
        return 1 - Math.pow(1 - value, value / 5);
      },
    });
  };
};

export const scrollTo = (className) => {
  const element = document.querySelectorAll(`.${className}`)[0];
  // classToScrollTo.scrollIntoView();
  scrollIntoView(element, {
    time: 500,
    ease: (value) => {
      return 1 - Math.pow(1 - value, value / 5);
    },
  });
};

export const scrollToShowLinks = scrollToFactory('show-list');

export const scrollToAudioPlayer = scrollToFactory('footer');

export const scrollToEpisodeList = scrollToFactory('episode-list');

export const scrollToEpisodePage = scrollToFactory('episode');
