import React, { useState } from 'react';
import AcdemicContent from '../../Components/AcdemicContent';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/AcademicSidebar';
import AcademicsHome from '../../Components/AcademicsHome';
import Syllabus from '../../Components/Syllabus';
import AcademicCalendars from '../../Components/AcademicCalender';
import Results from '../../Components/Result';
import OldQuestionPapers from '../../Components/OldQuestionPaper';
import EligibilityNumbers from '../../Components/EligibilityNumber';
import StudentDevelopmentWelfare from '../../Components/StudentDevelopmentWelfare';
import AccreditationStatus from '../../Components/AccreditationStatus';

function Academics() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveSectionContent = () => {
    switch (activeSection) {
      default:
        return (
          <div className='my-32 flex flex-col gap-5 px-5'>
            <AcademicsHome />
            <Syllabus />
            <AcademicCalendars />
            <Results />
            <OldQuestionPapers />
            <EligibilityNumbers />
            <StudentDevelopmentWelfare />
            <AccreditationStatus />
          </div>
        );
    }
  };

  return (
    <div className="Academics">
      {/* Mobile Layout - No changes */}
      <div className="md:hidden py-10">
        <Navbar isMobile={true} /> {/* Pass isMobile prop to Navbar for mobile adjustments */}
        {getActiveSectionContent()} {/* Display content based on active section */}
      </div>

      {/* Desktop Layout - Full width for academic content */}
      <div className="hidden md:flex">
        <Navbar />
        <div className="content-container pt-20 flex flex-row w-full min-h-screen">
          <Sidebar className="w-1/3" onSectionChange={handleSectionChange} />
          <div className="w-2/3 m-10 px-10 "> {/* Apply flex-grow for full width */}
            <AcdemicContent activeSection={activeSection} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Academics;
