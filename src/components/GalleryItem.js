import React from 'react';
import "./Gallery.css";

const GalleryItem = ({ imageUrl, description }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt="Gallery" className="gallery-image" />
      <p className="gallery-description">{description}</p>
    </div>
  );
};

export default GalleryItem;
