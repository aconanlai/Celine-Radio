import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


const Root = () => {

  const Info = () => (
    <div>BLAAAAH</div>
  );

  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
        <Route path="*" component={Info} />
      </Switch>
    </BrowserRouter>
  );

};
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
