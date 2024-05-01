import React from "react";
import "./HeroSection.css";
import Navbar from "../Navbar/Navbar";

function HeroSection() {
  return (
    <div className={`landing-page`}>
      <Navbar />
      <div className="overlay"></div>
      <h1>Education is key to Success</h1>
    </div>
  );
}

export default HeroSection;
