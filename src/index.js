import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createStore from './redux/create';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore();

const Root = () => (

  <BrowserRouter >
    <App store={store} />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
