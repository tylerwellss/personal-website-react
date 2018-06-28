import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import * as routes from './constants/routes';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
// import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path={routes.HOME}
            component={() => <Home />} />
          <Route path={routes.PROJECTS}
            component={() => <Projects />}
          />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
