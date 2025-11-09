import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

export const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const storyboardItems = [
    {
      id: 1,
      title: 'Film Production',
      image: './images/filmproduction.svg',
      path: '/filmproduction',
      rotation: 0
    },
    {
      id: 2,
      title: 'Branding',
      image: './images/branding.svg',
      path: '/branding',
      rotation: 0
    },
    {
      id: 3,
      title: 'Art Curation',
      image: './images/art.svg',
      path: '/artcuration',
      rotation: 0
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="storyboard-container">
      <div className="storyboard-content">
        <div className="storyboard-header">
          <h1>The storyboard reveals the breadth of our craft.</h1>
          <div className="header-underline">
            <img src="./images/header_underline.svg" alt="" />
          </div>
        </div>

        <div className="storyboard-gallery">
          {storyboardItems.map((item) => (
            <div
              key={item.id}
              className="polaroid-card"
              style={{
                transform: `rotate(${item.rotation}deg)`,
                '--rotation': `${item.rotation}deg`
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item.path)}
            >
              <div className="polaroid-tape">

              </div>
              
              <div className="polaroid-frame">
                <img src={item.image} alt={item.title} className="polaroid-image" />
              </div>

              <div className={`card-overlay ${hoveredCard === item.id ? 'active' : ''}`}>
                <span>View {item.title}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      <div className="decorative-pattern"></div>
    </div>
  );
};

