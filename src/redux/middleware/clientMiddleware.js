export default function clientMiddleware(client) {
  return ({ dispatch, getState, }) => {
    return next => (action) => {
      console.log(action);
      return next(action);
    };
  };
}
