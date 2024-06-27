import React from 'react';
import { motion } from 'framer-motion';
import BoysHostel from './BoysHostel';
import GirlsHostel from './GirlsHostel'

const HostelContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'Boy\'s Hostel':
        return <BoysHostel />;
      case 'Girl\'s Hostel':
        return <GirlsHostel />;
      default:
        return <BoysHostel />;
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

export default HostelContent;
