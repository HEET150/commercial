// Gallery.js

import React from "react";
import "./Gallery.css";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpeg";
import img7 from "../Images/img7.webp";
import img8 from "../Images/img8.png";
import img9 from "../Images/img9.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
