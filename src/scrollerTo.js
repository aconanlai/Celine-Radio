const scrollToFactory = (className) => {
  return () => {
    const classToScrollTo = document.querySelectorAll(className)[0];
    classToScrollTo.scrollIntoView();
  };
};

export const scrollToShowLinks = scrollToFactory('.show-list');

export const scrollToAudioPlayer = scrollToFactory('.footer');

export const scrollToEpisodeList = scrollToFactory('.episode-list');

export const scrollToEpisodePage = scrollToFactory('.episode');
