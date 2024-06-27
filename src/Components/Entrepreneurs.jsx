import React from 'react';
import { motion } from 'framer-motion';
import { entrepreneurs } from '../data/placement';

const Entrepreneurs = () => {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Entrepreneurs</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr. No.</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Year Of Passing</th>
            <th className="py-2 px-4 text-left">Branch</th>
            <th className="py-2 px-4 text-left">Photo</th>
            <th className="py-2 px-4 text-left">Enterprise / Organization</th>
            
          </tr>
        </thead>
        <tbody>
          {entrepreneurs.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.name}</td>
              <td className="py-2 px-4">{result.passingyear}</td>
              <td className="py-2 px-4">{result.branch}</td>
              <td className="py-2 px-4">
                <img
                  src={result.photo}
                  alt={result.name}
                  className="w-full h-40 object-cover" // Image styles
                />
              </td>
              <td className="py-2 px-4">{result.org}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    </>
  );
};

export default Entrepreneurs;