import React, { useState } from 'react';
import PlacementContent from '../Components/PlacementContent';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/PlacementSidebar';
import TandPHome from '../Components/TandPHome';
import TrainingProgramme from '../Components/TrainingProgramme';
import PlacedStudents from '../Components/PlacedStudents';
import MOU from '../Components/MOU';
import CampusReport from '../Components/CampusReport';
import IIPCCell from '../Components/IIPCCell';
import OurRecruiters from '../Components/OurRecruiters';
import Entrepreneurs from '../Components/Entrepreneurs';


function Placements() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveSectionContent = () => {
    switch (activeSection) {
      default:
        return (
          <div className='my-32 flex flex-col gap-5 px-5'>
            <TandPHome />
            <TrainingProgramme />
            <PlacedStudents />
            <MOU />
            <CampusReport />
            <IIPCCell />
            <OurRecruiters />
            <Entrepreneurs />
          </div>
        );
    }
  };

  return (
    <div className="Placements">
      {/* Mobile Layout - No changes */}
      <div className="md:hidden py-10">
        <Navbar isMobile={true} /> {/* Pass isMobile prop to Navbar for mobile adjustments */}
        {getActiveSectionContent()} {/* Display content based on active section */}
      </div>

      {/* Desktop Layout - Full width for placement content */}
      <div className="hidden md:flex">
        <Navbar />
        <div className="content-container my-32 flex flex-row w-full min-h-screen">
          <Sidebar className="w-1/3" onSectionChange={handleSectionChange} />
          <div className="w-2/3 m-10 px-10 "> {/* Apply flex-grow for full width */}
            <PlacementContent activeSection={activeSection} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Placements;
