import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // If we are on details page, link back to home with the hash
  const getHref = (hash) => isHome ? hash : `/${hash}`;

  return (
    <>
      <nav className="navbar" id="main-navbar">
        <a href="/" className="nav-brand">
          <img src="/bnu.png" alt="BNU Logo" className="nav-logo" />
          <span>FENG Activities</span>
        </a>
        <div className="nav-links">
          <a href={getHref('#projects')} className="nav-link">Projects</a>
          <a href={getHref('#sports-tournaments')} className="nav-link">Sports</a>
          <a href={getHref('#research-publications')} className="nav-link">Research</a>
          <a href={getHref('#events')} className="nav-link">Events</a>
          <a href={getHref('#clubs')} className="nav-link">Clubs</a>
          <a href={getHref('#workshops')} className="nav-link">Workshops</a>
          <a href={getHref('#facilities')} className="nav-link">Facilities</a>
          <a href={getHref('#internships')} className="nav-link">Internships</a>
          <a href={getHref('#announcements')} className="nav-link">Announcements</a>
        </div>
      </nav>

      <nav className="mobile-bottom-nav">
        <a href={getHref('#projects')} className="mobile-nav-item">
          <span className="material-icons">emoji_events</span>
          <span>Projects</span>
        </a>
        <a href={getHref('#sports-tournaments')} className="mobile-nav-item">
          <span className="material-icons">sports_martial_arts</span>
          <span>Sports</span>
        </a>
        <a href={getHref('#research-publications')} className="mobile-nav-item">
          <span className="material-icons">menu_book</span>
          <span>Research</span>
        </a>
        <a href={getHref('#events')} className="mobile-nav-item">
          <span className="material-icons">event</span>
          <span>Events</span>
        </a>
        <a href={getHref('#clubs')} className="mobile-nav-item">
          <span className="material-icons">groups</span>
          <span>Clubs</span>
        </a>
        <a href={getHref('#workshops')} className="mobile-nav-item">
          <span className="material-icons">construction</span>
          <span>Workshops</span>
        </a>
        <a href={getHref('#facilities')} className="mobile-nav-item">
          <span className="material-icons">business</span>
          <span>Facilities</span>
        </a>
        <a href={getHref('#internships')} className="mobile-nav-item">
          <span className="material-icons">work</span>
          <span>Internships</span>
        </a>
        <a href={getHref('#announcements')} className="mobile-nav-item">
          <span className="material-icons">campaign</span>
          <span>Announcements</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
