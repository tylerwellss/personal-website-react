import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

class Projects extends Component {
  state = {
    projects: {
      'URL-Shortener': {
        title: 'URL Shortener',
        desc: 'Input a long URL and receive a short URL to use instead. Sign in to save your shortened URLs.',
        techUsed: 'React, MongoDB, Firebase, NodeJS, Express',
        codeLink: 'http://www.github.com/wellstyler/url-shortener',
        liveLink: 'http://www.google.com',
        imageUrl: 'http://res.cloudinary.com/asdfbot/image/upload/c_scale,w_345/v1486185196/tzzxgifevdjecihkka2q.jpg',
        imageAltText: 'URL Shortener Website Preview'
      }
    }
  }

  render() {
    return (
      Object.keys(this.state.projects).map((key, index) => {
        const project = this.state.projects[key]
        return (
          <div className="Projects">
          <ProjectCard 
            title={project.title} 
            desc={project.desc}
            techUsed={project.techUsed}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
            imageUrl={project.imageUrl}
            key={index} 
          />
          </div>
        )
      })
    )
  }
}

export default Projects;