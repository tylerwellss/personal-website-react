import React from 'react';
import './ContactLinks.css';
import { GithubBox, LinkedinBox, FacebookBox, Email } from 'mdi-material-ui'

const ContactLinks = () => {
  return (
    <div className="ContactLinksContainer">
      <h2>Contact</h2>
      <ul className="ContactLink">
        <li><GithubBox className="Icon"/>
          <a rel="noopener noreferrer" href="https://www.github.com/wellstyler" target="_blank">Github</a>
        </li>
        <li><LinkedinBox className="Icon"/>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tyler-s-wells/" target="_blank">LinkedIn</a>
        </li>
        <li><FacebookBox className="Icon"/>
          <a rel="noopener noreferrer" href="https://www.facebook.com/tyler.s.wells" target="_blank">Facebook</a>
        </li>
        <li><Email className="Icon"/>
          <a rel="noopener noreferrer" href="mailto:tyler.wellss@gmail.com" target="_blank">Email</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactLinks;