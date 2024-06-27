import React from 'react'
import { motion } from 'framer-motion';
import {traniningprogramsconducted} from "../data/placement";

function TrainingProgramme() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Training Programmes</h1>
      <div className='flex flex-wrap justify-center mb-8 space-x-4 '>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Career Talks</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Expert Lectures</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Aptitude Test</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Mock G.D</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Mock Interviews</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Industrial training</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Guest lectures</span>
      <span className='p-2 bg-slate-300 rounded-lg text-black border border-slate-900 m-1'>Skills Development</span>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Training Programme Conducted</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Sr.No.</th>
            <th className="py-2 px-4 text-left">Programme Title</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Organized By</th>
            <th className="py-2 px-4 text-left">Resource Person</th>
            <th className="py-2 px-4 text-left">Download</th>
            
          </tr>
        </thead>
        <tbody>
          {traniningprogramsconducted.map((program, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{program.srno}</td>
              <td className="py-2 px-4">{program.title}</td>
              <td className="py-2 px-4">{program.date}</td>
              <td className="py-2 px-4">{program.by}</td>
              <td className="py-2 px-4">{program.person}</td>
              <td className="py-2 px-4">{program.download}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
    </>
  )
}

export default TrainingProgramme