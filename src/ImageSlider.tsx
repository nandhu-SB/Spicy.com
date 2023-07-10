import React, { useState, useEffect } from 'react';
import './ImageSlider.css'

import f1 from './assets/food/f1.jpg'
import f2 from './assets/food/f2.jpg'
import f3 from './assets/food/f3.jpg'



const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
f1,f2,f3
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ opacity: index === currentImageIndex ? .8: 0 }}
        />
      ))}
      <p></p>
    </div>
  );
}

export default ImageSlider;
