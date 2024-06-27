import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const VisionAbout = () => {
  const visionText = (
    <div className="vision-text flex flex-col">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Our Vision</h2>
      </div>
      <p className=' text-blue-900'>
      Providing nurturing ground for an individual's development to make effective contribution to the society in dynamic environment through academic excellence for professional competency.
      </p>
    </div>
  );


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {visionText}
    </motion.div>
  );
};

export default VisionAbout;
