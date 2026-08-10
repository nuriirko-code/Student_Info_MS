import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-8" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white mb-3">
            <i className="fas fa-graduation-cap text-blue-500 text-2xl"></i>
            <span>SIMS</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Student Information Management System — simplifying school administration and record keeping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
            <li><a href="#key-features" className="hover:text-blue-400 transition-colors">Key Features</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-500"></i>
              <span>support@sims.edu</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone text-blue-500"></i>
              <span>+123 456 7890</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1200px] mx-auto text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SIMS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;