import React from 'react';
import VisionAbout from './VisionAbout'
import About from './About'
import PresidentMsgAbout from './PresidentMsgAbout'
import PrincipalMsgAbout from './PrincipalMsgAbout'
import InfrastructureAbout from './InfrastructureAbout'
import MandatoryDisclosureAbout from './MandatoryDisclosureAbout'
import ProfessionalInstitutesAbout from './ProfessionalInstitutesAbout'
import { motion } from 'framer-motion';

const AboutUsContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
        case 'Vision & Mission':
            // Replace with content for Vision & Mission section
            return (
                <VisionAbout />
            );
        case 'About PDEA':
            // Replace with content for Vision & Mission section
            return (
                <About />
            );
        case 'President\'s Message':
            // Replace with content for Vision & Mission section
            return (
                <PresidentMsgAbout />
            );
        case 'Principal\'s Message':
            // Replace with content for Vision & Mission section
            return (
                <PrincipalMsgAbout />
            );
        case 'Infrastructure':
            // Replace with content for Vision & Mission section
            return (
                <InfrastructureAbout />
            );
        case 'Mandatory Disclosure':
            // Replace with content for Vision & Mission section
            return (
                <MandatoryDisclosureAbout />
            );
        case 'Professional Institutes':
            // Replace with content for Vision & Mission section
            return (
                <ProfessionalInstitutesAbout />
            );
      // Add more case statements for other sections as needed
      default:
        return <About />;
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
