import React from 'react';
import { motion } from 'framer-motion';
import { iqacCommitteeData } from '../data/oldnaac';

const OldIQACCommitte = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg bg-gray-100 p-5" // Adjusted styles
    >
      <h1 className="text-2xl font-bold text-gray-800 px-4 py-5">NAAC SSR DOcuments Criteria</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Sr.No.</th>
            <th className="py-2 px-4">Information(Click on link to download)</th>
          </tr>
        </thead>
        <tbody>
          {iqacCommitteeData.map((document, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{document.srNo}</td>
              <td className="py-2 px-4">
                <a href={document.url} download className="text-blue-500 underline">
                  {document.criteria}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};


export default OldIQACCommitte