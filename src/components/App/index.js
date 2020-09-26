// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Header/Sidebar';
import Games from 'src/components/Games';
import TopStreams from 'src/components/TopStreams';
import GamesStreams from 'src/components/GamesStreams';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Live from 'src/components/Live';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Games} />
        <Route path="/top-streams" component={TopStreams} />
        <Route path="/live/:slug" component={Live} />
        <Route path="/game/:slug" component={GamesStreams} />
      </Switch>
    </div>
  </Router>
);

// == Export
export default App;
