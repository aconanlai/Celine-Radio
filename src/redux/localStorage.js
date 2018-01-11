export const loadState = () => {
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
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('celineradioredux', serializedState);
    return true;
  } catch (err) {
    return undefined;
  }
};
