import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const OngoingProjects = () => {
  return (<>
    <Navbar/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-32"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Ongoing Projects</h2>
      <table className="w-full min-w-full table-auto text-sm text-gray-500 border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-4 font-medium text-gray-700">Sr. No</th>
            <th className="py-3 px-4 font-medium text-gray-700">Name of Faculty</th>
            <th className="py-3 px-4 font-medium text-gray-700">Year</th>
            <th className="py-3 px-4 font-medium text-gray-700">Funding Agency</th>
            <th className="py-3 px-4 font-medium text-gray-700">Amount (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4">{project.srNo}</td>
              <td className="py-2 px-4">{project.nameOfFaculty}</td>
              <td className="py-2 px-4">{project.year}</td>
              <td className="py-2 px-4">{project.fundingAgency}</td>
              <td className="py-2 px-4">{project.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    <Footer/>
    </>
  );
};

export default OngoingProjects;
