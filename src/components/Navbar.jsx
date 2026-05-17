import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-brand">
        <img src="/bnu.png" alt="BNU Logo" className="nav-logo" />
        <span>FENG Activities</span>
      </a>
      <div className="nav-links">
        <a href="#robotics" className="nav-link">Robotics</a>
        <a href="#entrepreneurship" className="nav-link">Entrepreneurship</a>
        <a href="#tech" className="nav-link">Tech</a>
      </div>
    </nav>
  );
};

export default Navbar;
