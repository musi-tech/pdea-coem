import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Your Logo</div>

      <ul className="nav-links">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
        <li>
          <a href="#Admission">Admission</a>
        </li>
        <li>
          <a href="#Events">Events</a>
        </li>
        <li>
          <a href="#Academics">Academics</a>
        </li>
        <li>
          <a href="#Gallery">Gallery</a>
        </li>
        <li>
          <a href="#Scholarship">Scholarship</a>
        </li>
        <li>
          <a href="#Hostels">Hostels</a>
        </li>
        <li>
          <a href="#Placements">Placements</a>
        </li>
      </ul>

      <button className="apply-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;
