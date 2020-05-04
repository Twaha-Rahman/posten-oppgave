import React from 'react';
import "./assets/css/core.css";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// Components
import NavBar from './components/navbar/NavBar.component';
import HomePage from './Pages/homepage.component';
import Result from './Pages/result.component';

function App() {

  return (
    <Router>
      <header className="header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>

    </Router>
  );
}

export default App;
