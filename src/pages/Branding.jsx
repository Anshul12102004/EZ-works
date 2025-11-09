import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FilmProductionPage.css';

export const Branding = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="film-production-detail-container">
      {/* Header with Quote and Underline */}
      <div className="header-section">
        <div className="quote-header">
          <p className="quote-header-text">
            "Filmmaking is a chance to live many lifetimes." - Robert Altman
          </p>
          <div className="quote-header-underline">
            <img src="./images/header_underline.svg" alt="" />
          </div>
        </div>
      </div>
      
       <div className='btn'>
            <button className="back-button" onClick={handleBackClick}>
              <span className="back-icon">←</span>
              <span className="back-text">Back</span>
            </button>
          </div>

      <div className="film-production-content">
        {/* Left Section */}
        <div className="left-section">
         

          <div className="featured-image-container">
              <img src="./images/filmproduction_object.svg" alt="" className='img'/>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Main Content */}
          <div className="content-section">
            <p className="des">Who says films are just an escape?<br/>
              We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. 
              And with each film, we carry new memories and new reasons to keep creating.<br/>
              V crafts:<br/>
              <ul className="services-list">
              <li>• Documentaries</li>
              <li>• Corporate Videos</li>
              <li>• 2D Animation Videos</li>
              <li>• 3D Animation Videos</li>
            </ul>
            </p>


             
          </div>
            <button className="explore-btn">
              <span>Explore Now</span>
              <span className="arrow">→</span>
            </button>
        </div>
      </div>
    </div>
  );
};

