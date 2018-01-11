export const loadState = () => {
  console.log('loading state');
  try {
    const serializedState = localStorage.getItem('celineradioredux');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  console.log('saving state');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('celineradioredux', serializedState);
    return true;
  } catch (err) {
    return undefined;
  }
};
