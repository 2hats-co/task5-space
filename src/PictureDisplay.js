import React from 'react';
import './PictureDisplay.css';

const PictureDisplay = props => {
  const { title, description, date, imageURL } = props;
  return (
    <main
      className="PictureDisplay"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="text-wrapper">
        <h4>{date}</h4>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
};

export default PictureDisplay;
