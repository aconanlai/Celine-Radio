export default function clientMiddleware(client) {
  return ({ dispatch, getState, }) => {
    return next => action => {
      console.log('THEY SAY MONEY IS THE ROOT OF ALL EVIL IDD RATHER BE EVIL THEN TO BE BROKE ')
    };
  }
}