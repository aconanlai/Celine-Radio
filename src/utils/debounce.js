function debounce(func, wait, immediate) {
  let timeout;
  return function debouncedFunction(...args) {
    const context = this;
    const later = function timer() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default debounce;
