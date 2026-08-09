import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-graduation-cap"></i>
        <span>SIMS</span>
      </div>

      {/* Hamburger Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Navbar Links */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;