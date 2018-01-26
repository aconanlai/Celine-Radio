import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Panel from './components/Panel/Panel';
import KeywordListContainer from './components/KeywordList/KeywordListContainer';
import ShowListContainer from './components/ShowList/ShowListContainer';
import EpisodeListContainer from './components/EpisodeList/EpisodeListContainer';
import EpisodeContainer from './components/Episode/EpisodeContainer';
import Logo from './components/Logo/Logo';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import MobileInitialScroller from './components/MobileInitialScroller/MobileInitialScroller';
import { setMobileStatus } from './redux/modules/ui';
import './App.css';

const App = class extends React.Component {
  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.props.setMobileStatus();
    }
  }
  render() {
    return (
      <div className="app">
        {/* <Switch>
          <Route path="*" component={MobileInitialScroller} />
        </Switch> */}
        <Logo />
        <TopBar />
        <div className="panel-container">
          <Panel panelClassName="keyword-list">
            <KeywordListContainer />
          </Panel>
          <Panel panelClassName="show-list">
            <div>
              <Switch>
                <Route path="*" component={ShowListContainer} />
              </Switch>
            </div>
          </Panel>
          <Panel panelClassName="episode-list">
            <div>
              <Route path="*" component={EpisodeListContainer} />
            </div>
          </Panel>
          <Panel panelClassName="episode">
            <Switch>
              <Route path="*" component={EpisodeContainer} />
            </Switch>
          </Panel>
        </div>
        <Footer />
      </div>
    );
  }
};

export default connect(null, { setMobileStatus, })(App);
