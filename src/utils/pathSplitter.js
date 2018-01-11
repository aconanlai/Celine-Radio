export const getShowSlugFromPath = (path) => {
  const parts = path.split('/');
  if (parts[1] === 'shows') {
    return parts[2];
  }
  return false;
};

export const getEpisodeSlugFromPath = (path) => {
  const parts = path.split('/');
  if (parts[3] === 'episodes') {
    return parts[4];
  }
  return false;
};
