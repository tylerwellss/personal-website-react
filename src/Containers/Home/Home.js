import React, { Component } from 'react';
import Splash from '../../Components/Splash/Splash';
import AboutMe from '../../Components/AboutMe/AboutMe';
import ContactLinks from '../../Components/ContactLinks/ContactLinks';
import posed from 'react-pose'
import './Home.css'

const Container = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

class Home extends Component {
  state = {
    isVisible: false,
  }
  componentDidMount() {
    this.setState({ isVisible: true })
  }
  render() {
    const {isVisible } = this.state;
    return (
      <Container pose={isVisible ? 'visible' : 'hidden'}>
        <Splash />
        <div className="FlexRow">
          <div className="Spacer"></div>
          <AboutMe className="AboutMe"/>
          <ContactLinks className="ContactLinks"/>
          <div className="Spacer"></div>
        </div>
      </Container>
    );
  };
}

export default Home;