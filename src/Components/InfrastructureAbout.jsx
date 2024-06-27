import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const InfrastructureAbout = () => {
  const InfrastructureAboutText = (
    <div className="InfrastructureAbout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">InfrastructureAbout PDEA</h2>
        </div>
      <span className="text-blue-900">Pune District Education Association's College Of Engineering Manjari (Bk.), Pune is located on Hadapsar Manjari Road, Manjari (Bk.), Pune. The campus is developed on a plot having land area 5 acres.</span>
      <span className="text-blue-900">There are 3 buildings constructed in the campus with total built up area of 14007 Sq. m.</span>
      <span className="text-blue-900">The buildings are functionally sound, aesthetically pleasant and satisfy are requirements of built up space as per AICTE norms.

</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
    {InfrastructureAboutText}
    </motion.div>
  );
};

export default InfrastructureAbout;
