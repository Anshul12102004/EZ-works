import './TeamPage.css';

export const AboutTeam = () => {
  return (
    <div className="team-container">
      <div className="team-content">
        <div className="left-section">
          {/* Yellow Note Card */}
          <div className="note-card">
            <div className="note-pin">
                <img src="./images/Team_page_object.svg" alt="team object" className='teamPage'/>
            </div>
          </div>

          {/* Architectural Element */}
          <div className="arch-element">
            <div className="arch-frame">
              <div className="arch-door">
                <img src="./images/gate_object.svg" alt="gate object" className='gate' />
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          {/* Team Silhouettes */}
          <div className="team-silhouettes">
            <div className="silhouette-group">
                <img src="./images/blue_team.svg" alt="group object" className='blueTeam'/>
            </div>

            {/* Decorative Labels */}
            <div className="label-filmmakers">Film Producers</div>
            <div className="label-creatives">Art Creatives</div>
          </div>

          {/* Main Text Section */}
          <div className="main-text">
            <p>Take a closer look at the stories V bring to life.</p>
            <button className="view-portfolio-btn">View Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

