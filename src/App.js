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
            render={() => (
              <About />
            )}
          />
          <Route
            exact
            path="/work"
            render={() => (
              <Work />
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Contact />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
