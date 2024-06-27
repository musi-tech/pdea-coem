import React from 'react'
import { motion } from 'framer-motion'
import {placementofficer} from '../data/placement'

function TandPHome() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 px-5" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800  py-2">About Training & Placement</h1>
      <div className='flex flex-col gap-5 '>
        <span>The Training and Placement Office promotes the placement of students who have graduated from the Institute, as well as cooperating with prominent organizations and institutes to build internship and training programmes for students.</span>
        <span>The office works with many industrial companies, corporate houses, and other organizations that conduct campus interviews and select graduate and post-graduate students from all fields. In addition to catering to other logistics, the Training and Placement Office offers the infrastructure for conducting group discussions, examinations, and interviews. The office connects with numerous sectors around the country, with almost ten (on and off campus) organizations visiting the university for campus interviews. The industries that approach to institution fall within the purview of:</span>
        <ol className='list-decimal ml-10'>
          <li>Core engineering industries</li>
          <li>IT & IT enabled services.</li>
          <li>Manufacturing Industries.</li>
          <li>Consultancy Firms</li>
          <li>Finance Companies.</li>
          <li>Management Organizations.</li>
          <li>R&D Laboratories.</li>
        </ol>
        <span>The placement season lasts all year, beginning in the last week of July and ending in March. Pre-placement discussions are also held in this respect at mutual convenience. The Training and Placement Office announces job offers, interview dates, candidate selection, and so forth.</span>
        <span>A group of members from the undergraduate engineering and postgraduate management disciplines assists the Placement office. The committee also has a set of unbreakable rules. Student members are heavily involved in the implementation of these policy choices.</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 px-5" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 mt-10 py-2">Training:</h1>
      <div className='flex flex-col gap-5 '>
        <span>Students are sent to various establishments for practical training based on their area of interest and specialization. Faculty members from many disciplines monitor the training of students in different industries. The analysis of industrial training is carried out based on the assessment report received from the industries, the subject matter, and the presentation of the training report presented by the students, as well as the viva-voce performed by the expert committee formed for the purpose.</span>
        <span>In addition to that; Our college has Started an initiative in the name as " CAMPUS CONNECTORS " , where student coordinators will be having fair enough chances to work with TPO Cell & Company Delegates on administrative matters.</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Training and Placement Officer Profile</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <tbody>
          {placementofficer.map((officer, index) => (
            <>
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">
                <img
                  src={officer.photo}
                  alt={officer.name}
                  className="w-full h-40 object-cover" // Image styles
                />
              </td>
              <tc className="flex flex-col ml-5">
              <td className="py-2 px-4"><b>Name:</b>{officer.name}</td>
              <td className="py-2 px-4"><b>Designation: </b>{officer.designation}</td>
              <td className="py-2 px-4"><b>Qualification: </b>{officer.qualification}</td>
              <td className="py-2 px-4"><b>Email ID:</b> {officer.emailID}</td>
              <td className="py-2 px-4"><b>Contact No.: </b>{officer.contact}</td>
              </tc>
            </tr>
            </>
          ))}
        </tbody>
        </table>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
        >
          <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600 text-center mt-1">
            <thead>
              <tr>
                <th >Experience in Years:</th>
                <th>Expert Area:</th>
                <th>Subjects Taught:</th>
                <th>Journal Publications:</th>
                <th>Petants:</th>
              </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td>
                    <sapn>Teaching: 3.5</sapn>
                    <sapn>Industry: 2.5</sapn>
                  </td>
                  <td>
                  <div className='flex flex-col px-5'>
                    <sapn>Soft Skill Training</sapn>
                    <sapn>Mechanical Engineering</sapn>
                    <sapn>Software Systems Skills</sapn>
                    <sapn>Positive Communication Skills</sapn>
                    </div>
                    </td>
                  <td>
                    <div className='flex flex-col px-5'>
                    <sapn>Communication Skills</sapn>
                    <sapn>English, Information Technology</sapn>
                    <sapn>Alternate Energy Sources</sapn>
                    <sapn>Graphics</sapn>
                    <sapn>Mechanical Engineering Materials (MEM)</sapn>
                    <sapn>Auto CAD, Management, Heating - Ventilation & Air Conditioning (HVAC)</sapn>
                    </div>
                    </td>
                  <td>NA</td>
                  <td>NA</td>
                </tr>
            </tbody>
          </table>
        </motion.div>
          
        </motion.div>
    </>
  )
}

export default TandPHome