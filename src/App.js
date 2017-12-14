import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Panel from './components/Panel/Panel';
import KeywordListContainer from './components/KeywordList/KeywordListContainer';
import EpisodeListContainer from './components/EpisodeList/EpisodeListContainer';
import EpisodeContainer from './components/Episode/EpisodeContainer';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="panel-container">
        <Panel>
          <KeywordListContainer />
        </Panel>
        <Panel>
          <div>
            second Panel
          </div>
        </Panel>
        <Panel>
          <div>
            <EpisodeListContainer />
          </div>
        </Panel>
        <Panel>
          <Switch>
            <Route path="*" component={EpisodeContainer} />
          </Switch>
        </Panel>
      </div>
      <Footer />
    </div>
  );
};

export default App;
