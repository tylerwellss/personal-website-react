import React from 'react';
import './Splash.css';

const splash = () => {
  return (
    <div className="Splash">
      <div className="ImageContainer">
        <img alt="One coder boi" src='http://res.cloudinary.com/asdfbot/image/upload/c_scale,w_195/v1510219790/hthxl9xrmqzkphykjwry.jpg'/>
      </div>
      <div className="TextContainer">
        <h1>Tyler Wells</h1>
        <p><strong>Software Engineer</strong></p>
      </div>
    </div>
  )
}

export default splash;