import React from 'react';
import { Link } from 'react-router-dom';

const ActivityCard = ({ project }) => {
  const { id, title, description, image, badgeText, badgeClass, teamLogo, teamPhoto, imageFit } = project;

  return (
    <Link to={`/project/${id}`} className="activity-card-link">
      <div className={`activity-card fade-in ${!image ? 'no-image' : ''}`}>
        {image && (
          <div className="activity-image-wrapper">
            <img src={image} alt={title} className={`activity-image ${imageFit === 'contain' ? 'img-contain' : ''}`} loading="lazy" />
          </div>
        )}
        
        <div className="activity-body">
          <div className="card-header-flex">
            {badgeText && (
              <span className={`activity-badge ${badgeClass || 'badge-competition'}`}>
                {badgeText}
              </span>
            )}
            {teamLogo && (
              <img src={teamLogo} alt="Team Logo" className="team-logo-small" />
            )}
            {teamPhoto && (
              <img src={teamPhoto} alt="Team Photo" className="team-photo-small" />
            )}
          </div>
          
          <h3 className="activity-title">{title}</h3>
          <p className="activity-description">{description}</p>
          
          <div className="click-indicator">
            <span className="material-icons">info</span> More Info
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
