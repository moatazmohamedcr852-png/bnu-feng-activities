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
          <a href={getHref('#competitions')} className="nav-link">Competitions</a>
          <a href={getHref('#events')} className="nav-link">Events</a>
          <a href={getHref('#clubs')} className="nav-link">Clubs</a>
          <a href={getHref('#facilities')} className="nav-link">Facilities</a>
        </div>
      </nav>

      <nav className="mobile-bottom-nav">
        <a href={getHref('#competitions')} className="mobile-nav-item">
          <span className="material-icons">emoji_events</span>
          <span>Competitions</span>
        </a>
        <a href={getHref('#events')} className="mobile-nav-item">
          <span className="material-icons">event</span>
          <span>Events</span>
        </a>
        <a href={getHref('#clubs')} className="mobile-nav-item">
          <span className="material-icons">groups</span>
          <span>Clubs</span>
        </a>
        <a href={getHref('#facilities')} className="mobile-nav-item">
          <span className="material-icons">business</span>
          <span>Facilities</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
