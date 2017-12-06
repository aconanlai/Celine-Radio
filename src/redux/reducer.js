import { combineReducers } from 'redux';

import audio from './modules/audio';

export default combineReducers({
  _audio: audio,
});
