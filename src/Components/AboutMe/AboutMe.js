import React from 'react';
import './AboutMe.css';
import * as routes from '../../Constants/routes';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h2>About me</h2>
      <p>Hey, I'm Tyler. I'm a software engineer living in Kansas City.
      I like working with Javascript, especially React, React Native, and NodeJS.
      You can find my 
      contact information on this page, as well as a list of <Link to={routes.PROJECTS}>projects</Link> including some details, a link to the code, and a link to the live project. 
      Feel free to <a href="mailto:tyler.wellss@gmail.com">get in touch</a> if you'd like to chat.</p>
    </div>
  );
}

export default AboutMe;