import React from 'react';
import { motion } from 'framer-motion';

function PGContent() {


  const fadeInUp = {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {/* UG Admissions */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">M. B. A - Intake</h2>
        </div>
          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Sr. No.</th>
                  <th className="px-4 py-2">Course</th>
                  <th className="px-4 py-2">Choice Code</th>
                  <th className="px-4 py-2">AICTE Approved Intake</th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows for each course here (replace with your data) */}
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Master of Computer Application (MCA)</td>
                  <td className="py-2 px-4">620624110</td>
                  <td className="py-2 px-4">60</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">Master of Business Administration (MBA)</td>
                  <td className="py-2 px-4">620610110</td>
                  <td className="py-2 px-4">120</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />               
          <div className='flex flex-col text-center my-2'>
            <span className='text-blue-900 font-bold'>Download:</span>
            <a href="#" className="text-blue-500">MBA-Admission -Schedule_21-22</a>
          </div>
          <hr /> 

          <p className='my-10 text-blue-900'>
          The MBA programme prepares a student for domestics and global careers in diverse sectors of industry. The MBA programme facilitates learning in theory and practice of different functional areas of management and equips the students with an integrated approach to various functions of management. However demand of managerial skill is not limited to the industry. Managerial talent is much sought by government sectors, NGOs, non-corporate sectors as well.
          </p>

          <h3 className="mt-6 text-blue-900 font-bold text-lg">PDEA's College of Engineering Manjari is offering post graduate management degree Master of Business Administrations with the intake of 60 since 2008, with the following specializations:</h3>
          <ol className='list-decimal list-inside my-5 ml-5 flex flex-col gap-2 text-lg'>
            <li className='mb-2'>Marketing Management</li>
            <li className='mb-2'>Financial Management</li>
            <li className='mb-2'>Information Technology Management</li>
            <li className='mb-2'>Operations Management</li>
            <li className='mb-2'>Human resource Management</li>
            <li className='mb-2'>International Business Management</li>
            <li className='mb-2'>Supply Chain Management</li>
            <li className='mb-2'>Rural & Agribusiness Management</li>
            <li className='mb-2'>Family Business Management</li>
            <li className='mb-2'>Technology Management</li>
          </ol>

          <h3 className="mt-6 text-blue-900 font-bold text-lg">Eligibility Conditions And Requirements For Admissions: </h3>
          <ul className='my-5'>

            <li className='mt-2 flex flex-col gap-4 text-lg'>
              <h4 className='text-blue-900 font-bold'>(1) Maharashtra State Candidature Candidate:</h4>
              <p>
              (i) The Candidate should be an Indian National;
              </p>
              <p>
              (ii) Passed minimum Three year duration Bachelors Degree awarded by any of the Universities recognized by University Grants Commission or Association of Indian Universities in any discipline with at least 50% marks in aggregate or equivalent ( at least 45% in case of candidates of backward class categories and Persons With Disability belonging to Maharashtra State only) or its equivalent;              
              </p>
              <p>
              (iii) Obtained score in CET conducted by the Competent Authority.
              </p>
            </li>
            <li className='mt-2 flex flex-col gap-4 text-lg'>
              <h4 className='text-blue-900 font-bold'>(2) All India Candidature Candidate, Jammu and Kashmir:</h4>
              <p className='text-blue-900 font-bold'>Migrant Candidature Candidate-</p>
              <p>
              (i) The Candidate should be an Indian National;
              </p>
              <p>
              (ii) Passed minimum Three year duration Bachelor's Degree awarded by the University recognized by University Grants Commission or Association of Indian Universities in any discipline with at least 50% marks in aggregate or equivalent (at least 45% in case of candidates of backward class categories and Persons With Disability belonging to Maharashtra State only) or its equivalent;
              </p>
              <p>
              (iii) Obtained score in one of the following examinations;
              </p>
              <ul className='list-disc text-md ml-5'>
                <li>CET conducted by the Competent Authority,</li>
                <li>Graduate Management Aptitude Test Conducted by Graduate Management Admission Council, United States of America(GMAT),</li>
                <li>Common Admission Test conducted by Indian Institute of Management (CAT),</li>
                <li>Management Aptitude Test Conducted by All India Management Association (MAT),</li>
                <li>Entrance Test for Management Admissions conducted by The Association of Indian Management Schools.(ATMA),</li>
                <li>Xavier Aptitude Test conducted by Xavier School of Management Jamshedpur (XAT) and</li>
                <li>Common Management Aptitude Test Conducted by All India Council for Technical Education (CMAT).</li>
              </ul>
            </li>
            <li className='mt-5 flex flex-col gap-4 text-lg'>
              <h4 className='text-blue-900 font-bold'>(3) (C) Children of NRI/OCI/PIO, Children of Indian workers in the Gulf countries, Foreign National:</h4>
              <p className='text-blue-900 font-bold'>Migrant Candidature Candidate-</p>
              <p>
              (i)Passed minimum Three year duration Bachelor's Degree awarded by the University recognized by University Grants Commission or Association of Indian Universities in any discipline with at least 50% marks in aggregate or its equivalent;
              </p>
              <p>
              (ii) Any other criterion declared by appropriate authority from time to time.              
              </p>
            </li>
          </ul>

          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
          <h3 className="mt-6 text-blue-900 font-bold text-lg">DOCUMENTS REQUIRED FOR MBA ADMISSIONS:</h3>
          <span className="text-slate-500 py-5">Note: Copies of all documents- 3 sets</span>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Sr. No.</th>
                  <th className="px-4 py-2">Name of Document</th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows for each course here (replace with your data) */}
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Allotment Letter</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">C-MAT Score card / CET Score card</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Statement of Marks - SSC</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">4</td>
                  <td className="py-2 px-4">Statement of Marks - HSC</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">Diploma Marksheet (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">6</td>
                  <td className="py-2 px-4">Degree Mark sheet</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">7</td>
                  <td className="py-2 px-4">Leaving Certificate / Transfer Certificate / Migration / Equivalent Certificate (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">8</td>
                  <td className="py-2 px-4">Certificate of Indian Nationality in the name of the Candidate</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">9</td>
                  <td className="py-2 px-4">Proforma I</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">10</td>
                  <td className="py-2 px-4">Cast Certificate (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">11</td>
                  <td className="py-2 px-4">Cast Validity (Proforma H)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">12</td>
                  <td className="py-2 px-4">Non-Creamy Layer Certificate valid up to 31st March 2019 (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">13</td>
                  <td className="py-2 px-4">Certificates in Proforma A, B, C, D, E and F as applicable</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">14</td>
                  <td className="py-2 px-4">Domicile Certificate (if applicable), clearly indicating the place of Permanent Residence of the Candidate / Father or Mother or Husband</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">15</td>
                  <td className="py-2 px-4">Gap Certificate (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">16</td>
                  <td className="py-2 px-4">Aadhaar Card</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">17</td>
                  <td className="py-2 px-4">Any other relevant document</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">18</td>
                  <td className="py-2 px-4">Passport size photoraphs-3 nos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}

export default PGContent;


