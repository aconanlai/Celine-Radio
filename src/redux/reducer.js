import { combineReducers } from 'redux';

import audio from './modules/audio';
import keywords from './modules/keywords';

export default combineReducers({
  _audio: audio,
  _keywords: keywords,
});
