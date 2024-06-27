import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/AdmissionSidebar';
import UGContent from '../Components/UGContent';
import PGContent from '../Components/PGContent';
import AdmissionBrochure from '../Components/AdmissionBrochure';
import FeeStructure from '../Components/FeeStructure';
import DisciplineAndConduct from '../Components/DisciplineAndConduct';
import Footer from '../Components/Footer/Footer';

function Admission() {
  const [activeSection, setActiveSection] = useState('UG');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveSectionContent = () => {
    switch (activeSection) {
      case 'UG':
        return <UGContent />;
      case 'PG':
        return <PGContent />;
      case 'Admission Brochure':
        return <AdmissionBrochure />;
      case 'Fee Structure':
        return <FeeStructure />;
      case 'Discipline & Conduct':
        return <DisciplineAndConduct />;
      default:
        return null;
    }
  };

  const getmbileSectionContent = () => {
    switch (activeSection) {
      default:
        return (
          <div className='my-20 flex flex-col gap-5 px-5'>
            <UGContent />
            <PGContent />
            <AdmissionBrochure />
            <FeeStructure />
            <DisciplineAndConduct />
          </div>
        );
    }
  };

  return (
    <div className="AdmissionPage">
      {/* Mobile Layout - No changes */}
      <div className="md:hidden py-10">
        <Navbar isMobile={true} /> {/* Pass isMobile prop to Navbar for mobile adjustments */}
        {getmbileSectionContent()} {/* Display content based on active section */}
      </div>

      {/* Desktop Layout - Full width for admission content */}
      <div className="hidden md:flex">
        <Navbar />
        <div className="content-container pt-20 flex flex-row w-full min-h-screen">
          <Sidebar className="w-1/3" activeSection={activeSection} onSectionChange={handleSectionChange} />
          <div className="w-2/3 m-10 px-10 "> {/* Apply flex-grow for full width */}
            {getActiveSectionContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admission;
