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

      <section id="competitions" className="category-section cat-competitions">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">emoji_events</span>
          </div>
          <h2 className="category-title">Competitions</h2>
          <p className="category-description">
            Showcasing excellence through competitive projects, hackathons, and challenges.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('competitions').map(project => (
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

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Benha National University — Faculty of Engineering (FENG). All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
