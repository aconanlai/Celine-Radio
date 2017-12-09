import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Panel from './components/Panel/Panel';
import EpisodeListContainer from './components/EpisodeList/EpisodeListContainer';
import EpisodeContainer from './components/Episode/EpisodeContainer';
import Footer from './components/Footer/Footer';
import './App.css';

const Info = () => (<div>Info</div>);

const HomePage = () => (
  <div>
    <h1>Homepage</h1>
    <Link to="/episodes">Episodes</Link>
  </div>
);
//

const notOnPageYet = () => (
  <div>no episode selected yet</div>
);

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
          <Switch>
            <Route exact path="/" component={notOnPageYet} />
            <Route path="*" component={EpisodeContainer} />
          </Switch>
        </Panel>
      </div>
      <Footer />
    </div>
  );
};

export default App;
