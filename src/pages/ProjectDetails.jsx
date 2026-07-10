import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const childProjects = projectsData.filter(p => p.parentId === id);

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
            <img src={project.image} alt={project.title} className={`details-image ${project.imageFit === 'contain' ? 'img-contain' : ''}`} />
          </div>
        )}

        {project.extraImage && (
          <div className="details-image-wrapper mt-2">
            <img src={project.extraImage} alt={project.title} className={`details-image ${project.imageFit === 'contain' ? 'img-contain' : ''}`} />
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="details-gallery">
            <h3 className="gallery-heading">Photo Gallery</h3>
            <div className="gallery-grid">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={img} alt={`${project.title} — photo ${idx + 1}`} className="gallery-image" />
                </div>
              ))}
            </div>
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
              <p style={{whiteSpace: 'pre-line'}}><strong>Description:</strong> {project.description}</p>
              
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

          {(((project.category === 'clubs' || project.category === 'projects') || project.id === 'arduino-workshop') && project.id !== 'ieee-branch') && (
            <section className="details-section supervisor-section">
              <h2>Supervisors</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="supervisor-widget" style={{ marginTop: 0 }}>
                  <img src="/supervisors/dr_dina_hosny_el_nagar.jpeg" alt="Dr. Dina Hosny El Nagar" className="supervisor-photo" />
                  <div className="supervisor-info">
                    <h3>Dr. Dina Hosny El Nagar</h3>
                    <p>Project Supervisor</p>
                  </div>
                </div>

                {project.category === 'projects' && project.id !== 'remove' && (
                  <div className="supervisor-widget" style={{ marginTop: 0 }}>
                    <img src="/supervisors/dr_mohamed_said.jpeg" alt="Dr. Mohamed Said" className="supervisor-photo" />
                    <div className="supervisor-info">
                      <h3>Dr. Mohamed Said</h3>
                      <p>Project Supervisor</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {project.supervisors && project.supervisors.length > 0 && (
            <section className="details-section supervisor-section">
              <h2>Supervisors</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {project.supervisors.map((sup, idx) => (
                  <div key={idx} className="supervisor-widget" style={{ marginTop: 0 }}>
                    <div className="supervisor-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary-light)', color: 'white' }}>
                      <span className="material-icons" style={{ fontSize: '3rem' }}>person</span>
                    </div>
                    <div className="supervisor-info">
                      <h3>{sup.name}</h3>
                      <p>{sup.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {childProjects.length > 0 && (
            <section className="details-section">
              <h2>Associated Activities & Projects</h2>
              <div className="details-child-projects">
                {childProjects.map(childProject => (
                  <article key={childProject.id} className="details-child-project">
                    <div className="details-child-project-media">
                      {childProject.image && (
                        <img src={childProject.image} alt={childProject.title} />
                      )}
                    </div>
                    <div className="details-child-project-content">
                      {childProject.badgeText && (
                        <span className={`activity-badge ${childProject.badgeClass || 'badge-competition'}`}>
                          {childProject.badgeText}
                        </span>
                      )}
                      {childProject.teamPhoto && (
                        <img src={childProject.teamPhoto} alt="Team Photo" className="details-team-photo" />
                      )}
                      <h3>{childProject.title}</h3>
                      <p>{childProject.description}</p>
                      <p>{childProject.story}</p>
                      {childProject.teamMembers && childProject.teamMembers.length > 0 && (
                        <div className="details-team-members">
                          {childProject.teamMembers.map((member, idx) => (
                            <div key={idx} className="details-team-member">
                              <div className="member-avatar">
                                <span className="material-icons">person</span>
                              </div>
                              <span>{member}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
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
