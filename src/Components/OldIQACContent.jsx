import React from 'react';

import OldIQACCommitte from './OldIQACCommitte';
import OldAQAR from './OldAQAR';
import OldIQACmatReports from './OldIQACmatReports';


import { motion } from 'framer-motion';

const AboutUsContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
        case 'IQAC COMMITTEE':
            // Replace with content for Vision & Mission section
            return (
                <OldIQACCommitte />
            );
        case 'AQAR Reports':
            // Replace with content for Vision & Mission section
            return (
                <OldAQAR />
            );
        case 'IQAC Minutes & Action Taken Reports':
            // Replace with content for Vision & Mission section
            return (
                <OldIQACmatReports />
            );
      // Add more case statements for other sections as needed
      default:
        return <OldIQACCommitte />;
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

export default AboutUsContent;
