import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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

const App = () => {
  return (
    <div className="app">
      <div className="panel-container">
        <Panel>
          <div>
            first Panel
          </div>
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
          <div>
            fourth Panel
          </div>
        </Panel>
      </div>
      <Footer />
    </div>
  );
};

export default App;

{/* <Switch>
<Route exact path="/" component={HomePage} />
<Route exact path="/episodes" component={EpisodeListContainer} />
<Route
  exact
  path="/episodes/:slug"
  render={({ match, }) => (
    <EpisodeContainer slug={match.params.slug} />)}
/>
<Route path="/info" component={Info} />
<Route path="*" component={Info} />
</Switch> */}