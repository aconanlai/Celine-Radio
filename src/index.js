import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './Info'

import notFound from './notFound.js'
import { ReactRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';




const ROOT = () => {
  //
 
  return (
    <BrowserRouter >
      <Switch>
        
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
        <Route path="*" component={notFound} />
      </Switch>
    </BrowserRouter>
  )

}
ReactDOM.render(<ROOT />, document.getElementById('root'));
registerServiceWorker();
