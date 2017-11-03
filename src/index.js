import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

const Info = () => (
  <div>BLAAAAH</div>
);


const Root = () => {
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
