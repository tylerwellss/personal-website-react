import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="Card">
        <img className="Media" src={props.imageUrl} alt={props.imageAltText} />
        <CardContent>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.desc}
        </p>
        <br/>
        <p style={{'fontSize':'12px'}}>
          <strong>Tech Used: </strong>{props.techUsed}
        </p>
        <br/>
        {props.codeLink ? <a target="_blank" href={props.codeLink}><strong>Code</strong></a> : null}
        {props.liveLink ? <a target="_blank" href={props.liveLink}><strong>Live</strong></a> : null}
      </CardContent>
      </Card>
    </div>
  )
}

export default ProjectCard;