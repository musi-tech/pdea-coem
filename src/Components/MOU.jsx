import React from 'react';
import { motion } from 'framer-motion';
import { mou } from '../data/placement';

const MOU = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">MOU of Companies</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr.No.</th>
            <th className="py-2 px-4 text-left">Company Name</th>
            <th className="py-2 px-4 text-left">Role And Details</th>
            <th className="py-2 px-4 text-left">Document</th>
            
          </tr>
        </thead>
        <tbody>
          {mou.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.companyname}</td>
              <td className="py-2 px-4">{result.roledetails}</td>
              <td className="py-2 px-4">
                <a href={result.url} download className="text-blue-500 underline">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default MOU;
