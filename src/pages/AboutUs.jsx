import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

export const AboutUs = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '85+', label: 'Projects', color: '#ff6b35' },
    { number: '50+', label: 'Happy Clients', color: '#ff6b35' },
    { number: '10+', label: 'Experts Team', isLink: true, path: '/aboutTeam', color: '#ff6b35' }
  ];

  const handleStatClick = (stat) => {
    if (stat.isLink) {
      navigate(stat.path);
    }
  };

  return (
    <div className="about-page-container">
      <div className="about-content-wrapper">
        {/* Left Section */}
        <div className="about-left-section">
          <h2 className="about-subtitle">A montage of familiar faces and names.</h2>
          
          <p className="about-description">
            Some stories come from the biggest names. Others begin with bold, rising voices. 
            We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
          </p>

          {/* Stats Cards */}
          <div className="stats-cards-container">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-card ${stat.isLink ? 'clickable' : ''}`}
                onClick={() => handleStatClick(stat)}
                style={{ cursor: stat.isLink ? 'pointer' : 'default' }}
              >
                <div className="stat-number" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="stat-label" style={{ color: stat.color }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="about-right-section">
          <div className="about-quote-section">
            <p className="about-quote">
              Every project is more than just a brief - it's a new chapter waiting to be written. 
              Together, we've crafted tales that inspire, connect, and endure.
            </p>
          </div>

          
          
          <div className="landscape-illustration">
            
          </div>
        </div>
      </div>

    
      <div className="footer-decorative-pattern"></div>
    </div>
  );
};

