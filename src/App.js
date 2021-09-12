import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import * as routes from './Constants/routes';
import Home from './Containers/Home/Home';
import Projects from './Containers/Projects/Projects';
// import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      /**
      <Router>
        <div>
          <Navigation />
          <Route exact path={routes.HOME}
            component={() => <Home />} />
          <Route path={routes.PROJECTS}
            component={() => <Projects />}
          />
        </div>
      </Router>
      **/
      <p>What are you doing here? If you need to contact me, you can: tyler.wellss at gmail dot com</p>
    );
  }
}

export default App;
