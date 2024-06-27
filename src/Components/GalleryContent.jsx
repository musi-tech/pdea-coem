import React from 'react';
import { motion } from 'framer-motion';
import Gallery2021 from '../Components/Gallery/Gallery2021'
import Gallery2122 from '../Components/Gallery/Gallery2122'
import Gallery2223 from '../Components/Gallery/Gallery2223'


const AcademicContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case '2020-2021':
        return <Gallery2021 />;
      case '2021-22':
        return <Gallery2122 />;
      case '2022-23':
        return <Gallery2223 />;
      default:
        return <Gallery2021 />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="content"
    >
      {renderSection()}
    </motion.div>
  );
};

export default AcademicContent;
