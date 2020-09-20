// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Header/Sidebar';
import Games from 'src/components/Games';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Sidebar />
    <Games />
  </div>
);

// == Export
export default App;
