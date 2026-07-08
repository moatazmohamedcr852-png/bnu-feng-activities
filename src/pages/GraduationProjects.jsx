import React, { useEffect } from 'react';
import ActivityCard from '../components/ActivityCard';
import { projectsData } from '../data';

const GraduationProjects = () => {
  useEffect(() => {
    // Scroll to top when loading the new page
    window.scrollTo(0, 0);

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

    document.querySelectorAll('.fade-in, .category-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Use this when there is graduation data
  const gradProjects = projectsData.filter(p => p.category === 'graduation-projects' && !p.parentId);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      <section className="category-section">
        <div className="category-header fade-in">
          <div className="category-icon">
            <span className="material-icons">school</span>
          </div>
          <h2 className="category-title">Graduation Projects</h2>
          <p className="category-description">
            Showcasing the capstone engineering projects of our senior students, demonstrating innovation and real-world problem solving.
          </p>
        </div>

        {gradProjects.length > 0 ? (
          <div className="activities-grid">
            {gradProjects.map(project => (
              <ActivityCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-light)' }} className="fade-in">
            <p>Coming soon: Graduation projects will be displayed here.</p>
          </div>
        )}
      </section>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Benha National University — Faculty of Engineering (FENG). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GraduationProjects;
