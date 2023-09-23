import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Header from './Header';
import NavBar from './NavBar';
import Portfolio from './Portfolio';  


const App = () => {
  return (
    <Router>
      <div>
        <Header title="Tanner Rhines" />
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <h1>Welcome to my website!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
