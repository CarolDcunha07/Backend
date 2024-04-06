import React from 'react';
import './Card.css'; 

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Gallery Item" className="card-image" />
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
