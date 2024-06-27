import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const MandatoryDisclosureAbout = () => {
  const MandatoryDisclosureAboutText = (
    <div className="MandatoryDisclosureAbout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">MandatoryDisclosureAbout PDEA</h2>
        </div>
      <span>Click links to download Mandatory Disclosure</span>
      <a className="text-blue-500 underline" href="path/to/MandatoryDisclosure.pdf" download>Mandatory Disclosure</a>
      
    </div>
  );


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {MandatoryDisclosureAboutText}
    </motion.div>
  );
};

export default MandatoryDisclosureAbout;