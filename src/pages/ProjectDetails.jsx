import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project Not Found</h2>
        <Link to="/" className="back-btn">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="details-container fade-in visible">
        <Link to="/" className="back-link">
          <span className="material-icons">arrow_back</span> Back to Projects
        </Link>

        <div className="details-header">
          {project.badgeText && (
            <span className={`activity-badge ${project.badgeClass || 'badge-competition'}`}>
              {project.badgeText}
            </span>
          )}
          <div className="details-header-images">
            {project.teamLogo && (
              <img src={project.teamLogo} alt="Team Logo" className="details-team-logo" />
            )}
            {project.teamPhoto && (
              <img src={project.teamPhoto} alt="Team Photo" className="details-team-photo" />
            )}
          </div>
          <h1 className="details-title">{project.title}</h1>
        </div>

        {project.image && (
          <div className="details-image-wrapper">
            <img src={project.image} alt={project.title} className="details-image" />
          </div>
        )}

        {project.extraImage && (
          <div className="details-image-wrapper mt-2">
            <img src={project.extraImage} alt={project.title} className="details-image" />
          </div>
        )}

        <div className="details-content">
          <section className="details-section">
            <h2>The Story</h2>
            <p className="details-story">{project.story}</p>
            {project.extraStory && (
              <p className="details-story mt-2">{project.extraStory}</p>
            )}
          </section>

          <div className="details-grid">
            <div className="details-info-card">
              <h3>Project Information</h3>
              <p><strong>Description:</strong> {project.description}</p>
              
              {project.achievement && (
                <div className="details-achievement mt-4">
                  <span className="material-icons achievement-icon-lg">emoji_events</span>
                  <div>
                    <span className="achievement-label">Major Achievement</span>
                    <strong className="achievement-text-lg">{project.achievement}</strong>
                  </div>
                </div>
              )}
              {project.extraAchievement && (
                <div className="details-achievement mt-4">
                  <span className="material-icons achievement-icon-lg">workspace_premium</span>
                  <div>
                    <span className="achievement-label">Additional Achievement</span>
                    <strong className="achievement-text-lg">{project.extraAchievement}</strong>
                  </div>
                </div>
              )}
            </div>

            <div className="details-meta-card">
              <h3>Details</h3>
              <ul className="meta-list">
                {project.competition && (
                  <li>
                    <span className="material-icons">emoji_events</span>
                    <span><strong>Event:</strong> {project.competition}</span>
                  </li>
                )}
                {project.extraCompetition && (
                  <li>
                    <span className="material-icons">workspace_premium</span>
                    <span><strong>Event 2:</strong> {project.extraCompetition}</span>
                  </li>
                )}
                {project.organizer && (
                  <li>
                    <span className="material-icons">business</span>
                    <span><strong>Organizer:</strong> {project.organizer}</span>
                  </li>
                )}
                {project.extraOrganizer && (
                  <li>
                    <span className="material-icons">domain</span>
                    <span><strong>Organizer 2:</strong> {project.extraOrganizer}</span>
                  </li>
                )}
                {project.date && (
                  <li>
                    <span className="material-icons">calendar_today</span>
                    <span><strong>Date:</strong> {project.date}</span>
                  </li>
                )}
                {project.extraDate && (
                  <li>
                    <span className="material-icons">event</span>
                    <span><strong>Date 2:</strong> {project.extraDate}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {project.teamMembers && project.teamMembers.length > 0 && (
            <section className="details-section team-section">
              <h2>Team Members</h2>
              <div className="details-team-members">
                {project.teamMembers.map((member, idx) => (
                  <div key={idx} className="details-team-member">
                    <div className="member-avatar">
                      <span className="material-icons">person</span>
                    </div>
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
