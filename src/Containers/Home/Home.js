import React, { Component } from 'react';
import Splash from '../../components/Splash/Splash';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Splash />
        <div style={{'display':'flex'}}>
          <div className="Spacer"></div>
          <AboutMe className="AboutMe"/>
          <ContactLinks className="ContactLinks"/>
          <div className="Spacer"></div>
        </div>
      </div>
    );
  };
}

export default Home;