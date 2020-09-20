// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Header/Sidebar';
import Games from 'src/components/Games';
import TopStreams from 'src/components/TopStreams';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      </Switch>
    </div>
  </Router>
);

// == Export
export default App;
