import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-lg">
      <div className="relative flex items-center justify-between px-8 py-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fas fa-graduation-cap text-blue-500 text-2xl"></i>
          <span>SIMS</span>
        </div>

        {/* Hamburger Toggle Button (HIDDEN on desktop with md:hidden) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`
            ${isOpen ? "flex" : "hidden"}
            absolute left-0 right-0 top-full bg-slate-800 p-6 shadow-lg
            md:static md:flex md:w-auto md:p-0 md:shadow-none
          `}
        >
          <ul className="flex w-full flex-col items-center gap-6 md:w-auto md:flex-row md:gap-8">
            <li>
              <a href="#home" className="text-sm hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm hover:text-blue-400 transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#key-features" className="text-sm hover:text-blue-400 transition-colors">
                Key Features
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-white hover:text-slate-800 transition-colors block w-full md:w-auto text-center font-medium"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;