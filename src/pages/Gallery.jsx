import React, { useState } from 'react';
import GalleryContent from '../Components/GalleryContent';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/GallerySidebar';
import Gallery2021 from '../Components/Gallery/Gallery2021';
import Gallery2122 from '../Components/Gallery/Gallery2122';
import Gallery2223 from '../Components/Gallery/Gallery2223';


function Gallery() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveSectionContent = () => {
    switch (activeSection) {
      default:
        return (
          <div className='my-32 flex flex-col gap-5 px-5'>
            <Gallery2021 />
            <Gallery2122 />
            <Gallery2223 />
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
            <GalleryContent activeSection={activeSection} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
