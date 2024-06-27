import React from 'react';
import { motion } from 'framer-motion';
import {placedstudents} from '../data/placement';

const PlacedStudents = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800  py-2">Placed Students</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
      {placedstudents.map((topper, index) => (
        <div key={index} className="rounded-lg shadow-md bg-white overflow-hidden">
          <img
            src={topper.image}
            alt={topper.name}
            className="w-full h-40 object-cover" // Image styles
          />
          <div className="px-4 py-2">
            <h3 className="text-base font-medium text-gray-800">{topper.name}</h3>
            <p className="text-sm text-gray-600">
              {topper.year} - {topper.branch}
            </p>
            <p className="text-sm font-medium text-green-500">Placed In: {topper.placedIn}</p>
            <p className="text-sm font-medium text-green-500">Job Profile: {topper.jobProfile}</p>
          </div>
        </div>
      ))}
      </div>
    </motion.div>
  );
};

export default PlacedStudents;
