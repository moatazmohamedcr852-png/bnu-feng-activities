import React from 'react';

const ProjectCard = ({ teamName, description, projects, icon, imageIcon }) => {
  return (
    <div className="card">
      <div className="card-header">
        {imageIcon ? (
          <img src={imageIcon} alt={teamName} style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '8px' }} />
        ) : (
          <div className="card-icon">
            {icon || <span className="material-icons">diversity_3</span>}
          </div>
        )}
        <h3 className="card-title">{teamName}</h3>
      </div>
      <div className="card-body">
        {description && <p className="card-text">{description}</p>}
        
        {projects && projects.map((proj, idx) => (
          <div key={idx} style={{marginBottom: '1rem'}}>
            <span className="project-badge">{proj.badgeText || "Featured Project"}</span>
            <div className="project-details">
              <h4>{proj.name}</h4>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
