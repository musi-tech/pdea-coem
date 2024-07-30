import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/OldIQACSidebar';
import AboutUsContent from '../Components/OldIQACContent'; 

import OldIQACCommitte from '../Components/OldIQACCommitte'
import OldAQAR from '../Components/OldAQAR';
import OldIQACmatReports from '../Components/OldIQACmatReports';

import Footer from '../Components/Footer/Footer';

function OldIQAC() {
  const [activeSection, setActiveSection] = useState('Vision & Mission');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveSectionContent = () => {
    switch (activeSection) {
      default:
        return (
          <div className='my-32 flex flex-col gap-5 px-5'>
            <OldIQACCommitte />
            <OldAQAR />
            <OldIQACmatReports />
          </div>
        );
    }}

  return (
    <div className="about-page">
      {/* Mobile Layout - No changes */}
      <div className="md:hidden py-10">
        <Navbar isMobile={true} /> {/* Pass isMobile prop to Navbar for mobile adjustments */}
        {getActiveSectionContent()} {/* Display content based on active section */}
      </div>

      {/* Desktop Layout - Full width for about us content */}
      <div className="hidden md:flex">
        <Navbar />
        <div className="content-container my-32 flex flex-row w-full min-h-screen">
          <Sidebar
            className="w-1/3"
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
          <div className="w-2/3 m-10 px-10 "> {/* Apply flex-grow for full width */}
            <AboutUsContent activeSection={activeSection} /> {/* Pass activeSection for conditional rendering (optional) */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OldIQAC;
