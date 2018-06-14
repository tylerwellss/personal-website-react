import React, { Component } from 'react';
import Splash from '../../Components/Splash/Splash';
import AboutMe from '../../Components/AboutMe/AboutMe';
import ContactLinks from '../../Components/ContactLinks/ContactLinks';
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