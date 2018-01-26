import { combineReducers } from 'redux';

import language from './modules/language';
import audio from './modules/audio';
import keywords from './modules/keywords';
import shows from './modules/shows';
import episodes from './modules/episodes';
import ui from './modules/ui';

export default combineReducers({
  _audio: audio,
  _keywords: keywords,
  _shows: shows,
  _episodes: episodes,
  _language: language,
  _ui: ui,
});
