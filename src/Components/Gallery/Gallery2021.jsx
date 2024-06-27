import React, { useState } from 'react';
import GalleryCategory from './GalleryCategory';
import { motion } from 'framer-motion';
import { Year2020 } from '../../data/gallery';



const Gallery2021 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Library'); // Initial selected category
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Stores selected image for fullscreen

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedImages = Year2020[selectedCategory] || []; // Get images for selected category

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsFullscreenOpen(true); // Open fullscreen on image click
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
    setIsFullscreenOpen(false); // Close fullscreen on close button click
  };

  return (
    <div className="gallery-container bg-gray-100 min-h-screen p-8">
      <motion.div
        className="flex flex-wrap justify-center mb-8 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.keys(Year2020).map((category) => (
          <GalleryCategory
            key={category}
            name={category}
            isActive={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
            className={`mt-5 text-lg font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              category === selectedCategory
                ? 'bg-accent-color text-white'
                : 'bg-blue-500 text-white hover:bg-secondary-color hover:text-primary-color'
            }`}
          />
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selectedImages.map((image) => (
          <motion.img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-lg object-cover h-64 md:h-auto cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
            onClick={() => handleImageClick(image)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      {isFullscreenOpen && (
        <motion.div
          className="fullscreen-image fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            className="max-h-screen max-w-screen-lg object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            className="absolute top-16 right-16 text-white bg-transparent hover:bg-gray-700 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={handleCloseFullscreen}
            whileHover={{ opacity: 1 }}
            animate={{ opacity: 0.8, transition: { duration: 0.3 } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery2021;
