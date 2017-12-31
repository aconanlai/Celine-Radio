
const scrollToFactory = (className) => {
  const classToScrollTo = document.querySelectorAll(className)[0];
  classToScrollTo.scrollIntoView();
};

export function scrollToShowLinks() {
  scrollToFactory('.panel-show-list');
}

export function scrollToAudioPlayer() {
  scrollToFactory('.footer');
}

export function scrollToEpisodeList() {
  scrollToFactory('.panel-episode-list');
}

export function scrollToEpisodePage() {
  scrollToFactory('.panel-episode');
}

