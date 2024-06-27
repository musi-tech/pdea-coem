/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown/Dropdown";
import { academicsLinks } from "./Dropdown/dropdownLinks";
import ApplyButton from "../ApplyButton";
const Logo = require("../../assets/images/pdea1.jpeg");

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
    <nav className={`navbar  border-b border-gradient-border ${scrolled ? "scrolled border-b border-gradient-border" : ""}`}>
      <div className="hamburger text-black" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      
      <div className="logo" style={{ cursor: "pointer" }}>
        <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="logo" width={35} />
        </a>
      </div>

      <ul className={`nav-links text-sm ${isOpen ? "open" : ""}`}>

        <Dropdown title={{text: "ACADEMICS" }} links={academicsLinks} />

        <li>
          <a href="/about" target="_blank" rel="noopener noreferrer">ABOUT US</a>
        </li>

        <li>
          <a href="/contactus" target="_blank" rel="noopener noreferrer">CONTACT US</a>
        </li>
        <li>
          <a href="/admission" target="_blank" rel="noopener noreferrer">ADMISSIONS
          </a>
        </li>
        <li>
          <a href="/events" target="_blank" rel="noopener noreferrer">EVENTS</a>
        </li>
        <li>
          <a href="/gallery" target="_blank" rel="noopener noreferrer">GALLERY</a>
        </li>
        <li>
          <a href="/scholarship" target="_blank" rel="noopener noreferrer">SCHOLARSHIP
          </a>
        </li>
        <li>
          <a href="/hostels" target="_blank" rel="noopener noreferrer">HOSTEL</a>
        </li>
        <li>
          <a href="/placements" target="_blank" rel="noopener noreferrer">PLACEMENT</a>
        </li>
        <li>
          <a href="https://moodle.pdeacoem.org/login/index.php" target="_blank" rel="noopener noreferrer">MOODLE</a>
        </li>
      </ul>

      <ApplyButton />
    </nav>
  );
}

export default Navbar;
