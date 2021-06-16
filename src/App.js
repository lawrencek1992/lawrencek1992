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
          >
            <About />
          </Route>
          <Route
            exact
            path="/work"
          >
            <Work />
          </Route>
          <Route
            exact
            path="/contact"
          >
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
