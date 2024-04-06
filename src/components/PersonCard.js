import React from 'react';
import './PersonCard.css'; 

function PersonCard({ name, imgSrc, description }) {
  return (
    <div className="person-card">
      <img src={imgSrc} alt={name} />
      <div className="person-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PersonCard;
