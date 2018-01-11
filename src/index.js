import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import debounce from './utils/debounce';
import createStore from './redux/create';
import { loadState, saveState } from './redux/localStorage';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
if (!persistedState._language && navigator.language.includes('fr')) {
  persistedState._language = 'fr';
}

const store = createStore(persistedState);

const debouncedSubscriber = debounce(() => {
  saveState({
    _cart: store.getState()._cart,
    _language: store.getState()._language,
    _shows: store.getState()._shows,
    _keywords: store.getState().keywords,
  });
}, 1000);

store.subscribe(debouncedSubscriber);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
