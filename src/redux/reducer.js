import { combineReducers } from 'redux';

// import language from './modules/language';
import audio from './modules/audio';

export default combineReducers({
  _audio: audio,
});