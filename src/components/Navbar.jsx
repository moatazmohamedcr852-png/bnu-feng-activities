import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" id="main-navbar">
      <a href="#home" className="nav-brand">
        <img src="/bnu.png" alt="BNU Logo" className="nav-logo" />
        <span>FENG Activities</span>
      </a>
      <div className="nav-links">
        <a href="#technical" className="nav-link">Technical</a>
        <a href="#sports" className="nav-link">Sports & Achievements</a>
        <a href="#seminars" className="nav-link">Seminars</a>
        <a href="#entrepreneurship" className="nav-link">Innovation</a>
      </div>
    </nav>
  );
};

export default Navbar;
