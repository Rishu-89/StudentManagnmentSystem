import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left md:w-1/3">
            <h2 className="text-2xl font-bold text-white mb-2">Student Management System</h2>
            <p className="text-gray-400">
              Manage students and courses effectively with our comprehensive platform.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 my-4 md:my-0 md:w-1/3">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/home" className="hover:text-white">
              Contact
            </Link>
            
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 md:w-1/3 justify-center md:justify-end">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png"
                alt="Facebook"
                className="hover:opacity-75"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                alt="Twitter"
                className="hover:opacity-75"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn"
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-500">
          © {new Date().getFullYear()} Student Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
