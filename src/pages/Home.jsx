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

  const getProjectsByCategory = (category) => projectsData.filter(p => p.category === category);

  return (
    <>
      <Hero />

      <section id="technical" className="category-section cat-technical">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">engineering</span>
          </div>
          <h2 className="category-title">Technical & Art Competitions</h2>
          <p className="category-description">
            Showcasing engineering excellence through competitive projects, hackathons, and technical innovation challenges.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('technical').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="sports" className="category-section cat-sports">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">sports_martial_arts</span>
          </div>
          <h2 className="category-title">Sports Activities & Championships</h2>
          <p className="category-description">
            Celebrating athletic excellence and competitive spirit across university championships and national tournaments.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('sports').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="seminars" className="category-section cat-seminars">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">school</span>
          </div>
          <h2 className="category-title">Seminars & Scientific Courses</h2>
          <p className="category-description">
            Advancing knowledge through workshops, hands-on training, and technical seminars led by industry experts and student innovators.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('seminars').map(project => (
            <ActivityCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="entrepreneurship" className="category-section cat-entrepreneurship">
        <div className="category-header">
          <div className="category-icon">
            <span className="material-icons">rocket_launch</span>
          </div>
          <h2 className="category-title">Entrepreneurship & Innovation</h2>
          <p className="category-description">
            Transforming engineering ideas into real-world solutions, fostering startup culture and innovative thinking among students.
          </p>
        </div>
        <div className="activities-grid">
          {getProjectsByCategory('entrepreneurship').map(project => (
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
