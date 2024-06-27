import React from 'react';
import { motion } from 'framer-motion';
import { iipccell } from '../data/placement';

const IIPCCell = () => {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">INDUSTRY INSTITUTE PARTNERSHIP CELL BOARD MEMBERS</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr. No.</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Designation</th>
            <th className="py-2 px-4 text-left">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {iipccell.map((result, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{result.srno}</td>
              <td className="py-2 px-4">{result.name}</td>
              <td className="py-2 px-4">{result.designation}</td>
              <td className="py-2 px-4">{result.companyname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <div className='flex flex-col gap-5 my-5'>
      <h4 className='text-blue-900 font-bold text-lg'>Activities performed under the cell every year:</h4>
      <ul className='list-disc text-md ml-5'>
        <li>National Level Paper Presentation Competition "FUTURRIZM".</li>
        <li>Industrial Visits under various departments.</li>
        <li>Guests Lectures of the eminent speakers from Industry.</li>
        <li>Financial Assistance to various projects undertaken by students.</li>
        <li>Financial Assistance Faculty Members for Research and Patent works.</li>
      </ul>
    </div>

    <div className='flex flex-col gap-5 my-5'>
      <h4 className='text-blue-900 font-bold text-lg'>Activities performed under Entrepreneurship Development Cell (ED Cell):</h4>
      <p>Academic Year: 2016-17</p>
      <p className='text-blue-500 font-semibold text-md'>Grant received from Entrepreneurship Development Institute of India (EDII), Gandhinagar, under the <span className='underline font-bold px-2'> DST - NIMAT - 2016</span> project of Department of Science & Technology (DST), Govt. of India.</p>
      <span className='underline font-bold px-2'>Amount Received:</span>
      <p className='text-blue-500 font-semibold text-md'>1. Rs.1 Lakh for arrangement of 05 Nos. Entrepreneurship Awareness Camps.</p>
      <p className='text-blue-500 font-semibold text-md'>2. Rs. 2 Lakh for arrangement of 01 No. Entrepreneurship Development Program.</p>
    </div>

    <div className='flex flex-col gap-5 my-5'>
      <h4 className='text-blue-900 font-bold text-lg'>Details of Event</h4>
      <ul className='list-decimal flex flex-col gap-5'>
        <li>Entrepreneurship Awareness Campfor B. E. & MBA students of PDEA's College of Engineering, Manjari (Bk), Pune</li>
        <li>Entrepreneurship Awareness Campfor MBA students of Institute of Management Studies & Research (IMSR) , Wadki, Pune</li>
        <li>Entrepreneurship Awareness Campfor MBA students of Shivaji Maratha Education Society's Institute of Management Studies, Sahkar Nagar, Pune</li>
        <li>Entrepreneurship Awareness Campfor B. Pharm. & D. Pharm. Students of PDEA's College of Pharmacy, Saswad, Pune</li>
        <li>Entrepreneurship Awareness Campfor B. E. students of AnantraoPawar College of Engineering, Parvati, Pune.</li>
        <li>4 - Weeks Entrepreneurship Development Programat PDEA's College of Engineering, Manjari (Bk), Pune.</li>
      </ul>
    </div>
    </>
  );
};

export default IIPCCell;