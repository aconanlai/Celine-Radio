import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/create';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>

);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
