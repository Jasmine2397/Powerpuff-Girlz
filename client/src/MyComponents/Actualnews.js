import React from 'react'
import { useState } from 'react';

export default function Actualnews() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      "https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D"
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <>
        <div className="container">
          <div className="sliding-window">
            <div className="slide">
              <img src={slides[currentSlide]} alt={`Image ${currentSlide + 1}`} />
            </div>
            <button className="arrow left" onClick={prevSlide}>←</button>
            <button className="arrow right" onClick={nextSlide}>→</button>
          </div>
          <div className="news-container">
            <h2>What's new in India?</h2>
            <p>Daily Updates</p>
            <ul>
              <li>News 1</li>
              <li>News 2</li>
              <li>News 3</li>
              <li>News  4</li>
            </ul>
          </div>
        </div>
      </>
  )
}
