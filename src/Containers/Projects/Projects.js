import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import * as projectsData from './ProjectsData.json'

class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({projects: projectsData})
  }

  render() {
    let projects = (
      Object.keys(this.state.projects).map((key, index) => {
        const project = this.state.projects[key]
        return (
        <div>
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
    return (
      <div className="Projects">
        {projects}
      </div>
    )
  }
}

export default Projects;