import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Panel from './components/Panel/Panel';
import EpisodeListContainer from './components/EpisodeList/EpisodeListContainer';
import EpisodeContainer from './components/Episode/EpisodeContainer';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="panel-container">
        <Panel>
          <EpisodeListContainer />
        </Panel>
        <Panel>
          <div>
            second Panel
          </div>
        </Panel>
        <Panel>
          <div>
            third Panel
          </div>
        </Panel>
        <Panel>
          <EpisodeContainer />
        </Panel>
      </div>
      <Footer />
    </div>
  );
};

export default App;
