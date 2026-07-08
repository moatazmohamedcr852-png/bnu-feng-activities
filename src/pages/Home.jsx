import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import { projectsData } from '../data';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getProjectsByCategory = (category) => projectsData.filter(p => p.category === category && !p.parentId);

  return (
    <>
      <Hero />

      <section id="projects" className="category-section cat-projects">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">emoji_events</span>
          </div>
          <h2 className="category-title">Projects</h2>
          <p className="category-description">
            Showcasing excellence through competitive projects, hackathons, and challenges.
          </p>
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)' }}>
          Award-Winning Projects
        </h3>
        <div className="activities-grid">
          {projectsData.filter(p => p.category === 'projects' && p.subcategory === 'award-winning' && !p.parentId).map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>

        <h3 style={{ marginTop: '4rem', marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)' }}>
          Outstanding Projects
        </h3>
        <div className="activities-grid">
          {projectsData.filter(p => p.category === 'projects' && p.subcategory === 'outstanding' && !p.parentId).map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
        
        <h3 style={{ marginTop: '4rem', marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', color: 'var(--primary-dark)' }}>
          Individual Awards
        </h3>
        <div className="activities-grid">
          {projectsData.filter(p => p.category === 'projects' && p.subcategory === 'individual-awards' && !p.parentId).map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="events" className="category-section cat-events">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">event</span>
          </div>
          <h2 className="category-title">Events</h2>
          <p className="category-description">
            Celebrating excellence, accomplishments, and spirit across university and national tournaments.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('events').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="clubs" className="category-section cat-clubs">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">groups</span>
          </div>
          <h2 className="category-title">Clubs</h2>
          <p className="category-description">
            Advancing knowledge through student-led clubs and communities.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('clubs').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="workshops" className="category-section cat-workshops">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">construction</span>
          </div>
          <h2 className="category-title">Workshops</h2>
          <p className="category-description">
            Hands-on training and technical sessions led by experts and innovators.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('workshops').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="facilities" className="category-section cat-facilities">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">business</span>
          </div>
          <h2 className="category-title">Facilities</h2>
          <p className="category-description">
            Fostering innovation and learning among students with world-class facilities.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('facilities').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="visits" className="category-section cat-visits">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">tour</span>
          </div>
          <h2 className="category-title">Visits</h2>
          <p className="category-description">
            Highlighting official visits, VIP tours, and high-level engagements at the Faculty of Engineering.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('visits').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="announcements" className="category-section cat-announcements">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">campaign</span>
          </div>
          <h2 className="category-title">Announcements</h2>
          <p className="category-description">
            Stay up to date with the latest news, updates, and upcoming events.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('announcements').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="internships" className="category-section cat-internships">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">work</span>
          </div>
          <h2 className="category-title">Internships</h2>
          <p className="category-description">
            Discover opportunities to gain practical experience and kickstart your career.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('internships').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Benha National University — Faculty of Engineering (FENG). All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
