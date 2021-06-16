import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './stylesheets/App.scss';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const  App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={About}
          />
          <Route
            exact
            path="/work"
            component={Work}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
