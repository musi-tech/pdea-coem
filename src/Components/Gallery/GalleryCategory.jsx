import React from 'react';
import { motion } from 'framer-motion';

const GalleryCategory = ({ name, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        text-white px-4 mt-5 lg:mt-2 py-2 rounded-md font-semibold transition-all duration-300
        ${isActive ? 'bg-orange-400 hover:bg-blue-500' : 'bg-orange-300 hover:bg-orange-900 text-blue-500'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
      onClick={onClick}
    >
      {name}
    </motion.button>
  );
};

export default GalleryCategory;
