import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectsData from '../Projects/ProjectsData';
import posed from 'react-pose';

const Container = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

class Projects extends Component {
  state = {
    projects: [],
    isVisible: false,
  }

  componentDidMount() {
    this.setState({ projects: ProjectsData, isVisible: true })
    window.scrollTo(0, 0)
  }

  render() {
    const { isVisible } = this.state;
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
      <Container className="Projects" pose={isVisible ? 'visible' : 'hidden'}>
        {projects}
      </Container>
    )
  }
}

export default Projects;