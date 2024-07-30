import React from 'react';
import { motion } from 'framer-motion';
import { mandareport } from '../data/naac';

const IQACmatReports = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg bg-gray-100 p-5" // Adjusted styles
    >
      <h1 className="text-2xl font-bold text-gray-800 px-4 py-5">IQAC Minutes & Action Taken Reports</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Sr.No.</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Year</th>
            <th className="py-2 px-4">Document</th>
          </tr>
        </thead>
        <tbody>
          {mandareport.map((report, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{report.srNo}</td>
              <td className="py-2 px-4">{report.title}</td>
              <td className="py-2 px-4">{report.year}</td>
              <td className="py-2 px-4">
                <a href={report.url} download className="text-blue-500 underline">
                  {report.title}.pdf
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default IQACmatReports;
