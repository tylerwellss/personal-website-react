import React from 'react';
import './AboutMe.css';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h2>About me</h2>
      <p>Hi. I'm an American software engineer currently living in Shanghai, China. I work on the <a href="https://www.pwc.com/us/en/increasing-it-effectiveness/emerging-technology-lab.html" target="_blank" rel="noopener noreferrer">Emerging Tech team</a> at PwC. We build PoCs and enterprise solutions using new technology to illustrate how new technology can benefit businesses. Lately, I'm building new solutions to old problems using blockchain platforms like <a href="https://www.hyperledger.org/" target="_blank" rel="noopener noreferrer">Hyperledger</a>. I've also worked for startups in China and provided my services as a freelancer to small businesses while living in China, Vietnam, and Japan. You can find my contact information on this page, as well as a list of <Link to={routes.PROJECTS}>projects</Link> including some details, a link to the code, and a link to the live project. Feel free to <a href="mailto:tyler.wellss@gmail.com">get in touch</a> if you'd like to chat.</p>
    </div>
  );
}

export default AboutMe;