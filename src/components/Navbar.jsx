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
          <a href={getHref('#technical')} className="nav-link">Technical</a>
          <a href={getHref('#sports')} className="nav-link">Sports</a>
          <a href={getHref('#seminars')} className="nav-link">Seminars</a>
          <a href={getHref('#entrepreneurship')} className="nav-link">Innovation</a>
        </div>
      </nav>

      <nav className="mobile-bottom-nav">
        <a href={getHref('#technical')} className="mobile-nav-item">
          <span className="material-icons">engineering</span>
          <span>Technical</span>
        </a>
        <a href={getHref('#sports')} className="mobile-nav-item">
          <span className="material-icons">emoji_events</span>
          <span>Sports</span>
        </a>
        <a href={getHref('#seminars')} className="mobile-nav-item">
          <span className="material-icons">school</span>
          <span>Seminars</span>
        </a>
        <a href={getHref('#entrepreneurship')} className="mobile-nav-item">
          <span className="material-icons">rocket_launch</span>
          <span>Innovation</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
