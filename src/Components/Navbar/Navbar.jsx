import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown/Dropdown";
import "./Navbar.css";
import { academicsLinks, researchLinks, naacLinks } from "./Dropdown/dropdownLinks";
import ApplyButton from "../ApplyButton";
import { Link } from "react-router-dom";
const Logo = require("../../assets/images/pdea1.png");

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${scrolled ? "bg-blue-900" : "bg-blue-800"} transition-colors duration-300`}>
      <div className="flex items-center justify-between p-4 w-full px-10">
        {/* Logo Column */}
        <div className="flex-shrink-0">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="logo" className="h-16" />
          </a>
        </div>

        {/* Content Column */}
        <div className="flex flex-col flex-grow gap-3 ">
          {/* First Row: Span and Buttons */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-white font-bold text-xl flex-grow text-center">
              PDEA's College of Engineering, Manjari (Bk.)
            </span>
            <div className="flex space-x-4">
              <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</Link>
              <ApplyButton />
            </div>
          </div>

          {/* Second Row: Navigation Links */}
          <nav className={`md:flex ${isOpen ? "block" : "hidden"} md:space-x-4 bg-blue-900 md:bg-transparent md:p-0 text-sm justify-center`}>
            <ul className={`nav-links md:flex md:items-center ${isOpen ? "block absolute top-0 left-0 w-full h-screen bg-white" : "hidden"} md:space-y-0 md:space-x-4 text-white`}>
              <li><a href="/about" target="_blank" rel="noopener noreferrer">ABOUT US</a></li>
              <Dropdown title={{ text: "ACADEMICS" }} links={academicsLinks} />
              <li><a href="/admission" target="_blank" rel="noopener noreferrer">ADMISSIONS</a></li>
              <li><a href="/placements" target="_blank" rel="noopener noreferrer">PLACEMENT</a></li>
              <li><a href="/faculty" target="_blank" rel="noopener noreferrer">FACULTY</a></li>
              <Dropdown title={{ text: "RESEARCH" }} links={researchLinks} />
              <li><a href="/scholarship" target="_blank" rel="noopener noreferrer">SCHOLARSHIP</a></li>
              <li><a href="/events" target="_blank" rel="noopener noreferrer">EVENTS</a></li>
              <li><a href="/gallery" target="_blank" rel="noopener noreferrer">GALLERY</a></li>
              <li><a href="/hostels" target="_blank" rel="noopener noreferrer">HOSTEL</a></li>
              <li><a href="/alumni" target="_blank" rel="noopener noreferrer">ALUMNI</a></li>
              <Dropdown title={{ text: "NAAC" }} links={naacLinks} />
              <li><a href="https://moodle.pdeacoem.org/login/index.php" target="_blank" rel="noopener noreferrer">MOODLE</a></li>
              <li><a href="/contactus" target="_blank" rel="noopener noreferrer">CONTACT US</a></li>
              <li className="md:hidden"><Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</Link></li>
              <li className="md:hidden"><ApplyButton /></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`w-6 h-1 bg-white mb-1 transition-transform ${isOpen ? "transform rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-1 bg-white mb-1 transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-1 bg-white transition-transform ${isOpen ? "transform -rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
