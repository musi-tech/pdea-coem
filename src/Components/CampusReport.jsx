import React from 'react';
import { motion } from 'framer-motion';
import { campusreport2122 } from '../data/placement';
import { campusreport2223 } from '../data/placement';
import { campusreport2324 } from '../data/placement';

const CampusReport = () => {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Campus Report 2023-24</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr.No.</th>
            <th className="py-2 px-4 text-left">Company Name</th>
            <th className="py-2 px-4 text-left">Batch</th>
            <th className="py-2 px-4 text-left">Branch</th>
            <th className="py-2 px-4 text-left">Criteria</th>
            <th className="py-2 px-4 text-left">Eligible</th>
            <th className="py-2 px-4 text-left">Appeared</th>
            <th className="py-2 px-4 text-left">Selected</th>
            <th className="py-2 px-4 text-left">Average Salary</th>
            
          </tr>
        </thead>
        <tbody>
          {campusreport2324.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.companyname}</td>
              <td className="py-2 px-4">{result.batch}</td>
              <td className="py-2 px-4">{result.branch}</td>
              <td className="py-2 px-4">{result.criteria}</td>
              <td className="py-2 px-4">{result.eligible}</td>
              <td className="py-2 px-4">{result.appeared}</td>
              <td className="py-2 px-4">{result.selected}</td>
              <td className="py-2 px-4">{result.averagesalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Campus Report 2022-23</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr.No.</th>
            <th className="py-2 px-4 text-left">Company Name</th>
            <th className="py-2 px-4 text-left">Batch</th>
            <th className="py-2 px-4 text-left">Branch</th>
            <th className="py-2 px-4 text-left">Criteria</th>
            <th className="py-2 px-4 text-left">Eligible</th>
            <th className="py-2 px-4 text-left">Appeared</th>
            <th className="py-2 px-4 text-left">Selected</th>
            <th className="py-2 px-4 text-left">Average Salary</th>
            
          </tr>
        </thead>
        <tbody>
          {campusreport2223.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.companyname}</td>
              <td className="py-2 px-4">{result.batch}</td>
              <td className="py-2 px-4">{result.branch}</td>
              <td className="py-2 px-4">{result.criteria}</td>
              <td className="py-2 px-4">{result.eligible}</td>
              <td className="py-2 px-4">{result.appeared}</td>
              <td className="py-2 px-4">{result.selected}</td>
              <td className="py-2 px-4">{result.averagesalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Campus Report 2021-22</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr.No.</th>
            <th className="py-2 px-4 text-left">Company Name</th>
            <th className="py-2 px-4 text-left">Batch</th>
            <th className="py-2 px-4 text-left">Branch</th>
            <th className="py-2 px-4 text-left">Criteria</th>
            <th className="py-2 px-4 text-left">Eligible</th>
            <th className="py-2 px-4 text-left">Appeared</th>
            <th className="py-2 px-4 text-left">Selected</th>
            <th className="py-2 px-4 text-left">Average Salary</th>
            
          </tr>
        </thead>
        <tbody>
          {campusreport2122.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.companyname}</td>
              <td className="py-2 px-4">{result.batch}</td>
              <td className="py-2 px-4">{result.branch}</td>
              <td className="py-2 px-4">{result.criteria}</td>
              <td className="py-2 px-4">{result.eligible}</td>
              <td className="py-2 px-4">{result.appeared}</td>
              <td className="py-2 px-4">{result.selected}</td>
              <td className="py-2 px-4">{result.averagesalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    </>
  );
};

export default CampusReport;
