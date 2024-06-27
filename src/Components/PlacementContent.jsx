import React from 'react';
import { motion } from 'framer-motion';
import TandPHome from './TandPHome';
import TrainingProgramme from './TrainingProgramme';
import PlacedStudents from './PlacedStudents';
import MOU from './MOU';
import CampusReport from './CampusReport';
import IIPCCell from './IIPCCell';
import OurRecruiters from './OurRecruiters';
import Entrepreneurs from './Entrepreneurs';



const AcademicContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'About Training & Placement':
        return <TandPHome />;
      case 'Training Programme':
        return <TrainingProgramme />;
      case 'Placed Students':
        return <PlacedStudents />;
      case 'MOU':
        return <MOU />;
      case 'Campus Report':
        return <CampusReport />;
      case 'IIPC Cell':
        return <IIPCCell />;
      case 'Our Recruiters':
        return <OurRecruiters />;
      case 'Entrepreneurs':
        return <Entrepreneurs />;
      default:
        return <TandPHome />;
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
