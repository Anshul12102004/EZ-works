import React, { useState } from 'react';
import './PortfolioPage.css';

export const Portfolio = () => {
  return (
    <div className="highlight-reel-container">
      <div className="reel-content">
        {/* Left Decorative Film Camera */}
        <div className="film-camera">
          <img src="./images/Cam.svg" alt="cam object" />
        </div>

        <div className="reel-section">
          <div className="reel-header">
            <h1>The Highlight Reel</h1>
            <p>Watch the magic we've captured.</p>
          </div>

          {/* Film Strip Container */}
          <div className="filmstrip-container">
            {/* Film perforations top */}
            <div className="filmstrip-perforations top">
              
            </div>

            {/* Carousel */}
            <div className="carousel">
             <img src="./images/prev.svg" alt="prev" />

              <div className="carousel-viewport">
                <div className="carousel-track">
                  <img src="./images/highlight_group.svg" alt="bg" className='carousel-img'/>
                </div>
              </div>

              <img src="./images/for.svg" alt="for" />
            </div>

            {/* Film perforations bottom */}
            <div className="filmstrip-perforations bottom"></div>
          </div>
        </div>

        {/* Right Decorative Pattern */}
        <div className="decorative-pattern"></div>
      </div>
    </div>
  );
};
