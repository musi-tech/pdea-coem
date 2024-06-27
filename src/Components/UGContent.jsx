import React, { useState } from 'react';
import { motion } from 'framer-motion';

function UGContent() {
  const [selectedYear, setSelectedYear] = useState('firstYear'); // Initial state

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const fadeInUp = {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  };

  const fadeIn = {
    opacity: 0,
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
          <h2 className="text-2xl font-bold">UG Admissions</h2>
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-700 ${
                selectedYear === 'firstYear' ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              onClick={() => handleYearChange('firstYear')}
            >
              First Year Engineering
            </button>
            <button
              className={`px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-700 ${
                selectedYear === 'directSecondYear' ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              onClick={() => handleYearChange('directSecondYear')}
            >
              Direct Second Year Engineering
            </button>
          </div>
        </div>

        {/* First Year Engineering Content (conditionally rendered) */}
        {selectedYear === 'firstYear' && (
          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
            <div className='overflow-x-auto mb-5'>
              <h3 className="text-2xl font-medium text-gray-800 px-4 py-5">F.E. Courses</h3>
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
                    <td className="py-2 px-4">Mechanical Engineering</td>
                    <td className="py-2 px-4">620661210</td>
                    <td className="py-2 px-4">60</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">Electronics and Telecommunication Engineering</td>
                    <td className="py-2 px-4">620637210</td>
                    <td className="py-2 px-4">60</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">Computer Engineering</td>
                    <td className="px-4 py-2">620624510</td>
                    <td className="px-4 py-2">180</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2">4</td>
                    <td className="px-4 py-2">Information Technology</td>
                    <td className="px-4 py-2">620624610</td>
                    <td className="px-4 py-2">60</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">Artificial Intelligence and Data Science (AIDS)</td>
                    <td className="px-4 py-2">620699510</td>
                    <td className="px-4 py-2">60</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />    
            <div className='flex flex-col text-center my-2'>
              <hr />              
              <span className='text-blue-900 font-bold'>Download:</span>
              <a href="#" className="text-blue-500">FRA fee regulating authority 2023-24</a>
            </div>
            <hr /> 


            <h3 className="mt-6 text-blue-900 font-bold text-lg">Eligibility Conditions And Requirements For Admissions:</h3>
            <p>
              The information is given below in brief. For details about Engineering Admission and Eligibility Criteria, refer DTE Maharashtra website  
            </p>
            <ul className='my-5'>

              <li className='mt-2 flex flex-col gap-4 text-lg'>
                <h4 className='text-blue-900 font-bold'>(1) Maharashtra State Candidature Candidate:</h4>
                <p>
                (i) The Candidate should be an Indian National; 
                </p>
                <p>
                (ii) Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical or Vocational subjects and obtained at least 50 % marks (at least 45% marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only) in the above subjects taken together;
                </p>
                <span className=' text-blue-900 font-bold flex justify-center'>OR</span>
                <p>
                (ii) Passed Diploma in Engineering and Technology and obtained at least 50% marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only);
                </p>
                <span className=' text-blue-900 font-bold flex justify-center'>OR</span>
                <p>
                (ii) Passed B.Sc. Degree from a Recognized University as defined by UGC and obtained at least 50 % marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only);                </p>
                <p>
                (iii) Obtained score in CET conducted by the Competent Authority.
                </p>
              </li>

              <li className='mt-2 flex flex-col gap-4 text-lg'>
                <h4 className='text-blue-900 font-bold'>(2) All India Candidature Candidates, Jammu and Kashmir Migrant Candidature Candidates:</h4>
                <p>
                (i) The Candidate should be an Indian National; 
                </p>
                <p>
                (ii) Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical or Vocational subjects and obtained at least 50 % marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only) in the above subjects taken together;                </p>
                <span className=' text-blue-900 font-bold flex justify-center'>OR</span>
                <p>
                (ii) Passed Diploma in Engineering and Technology and obtained at least 50 % marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only);                </p>
                <span className=' text-blue-900 font-bold flex justify-center'>OR</span>
                <p>
                (ii) Passed B.Sc. Degree from a Recognized University as defined by University Grants Commission and obtained at least 50 % marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only);
                </p>
                <p>
                (iii) Obtained score in CET or JEE Main Paper I.
                </p>
              </li>

              <li className='mt-2 flex flex-col gap-4 text-lg'>
                <h4 className='text-blue-900 font-bold'>
                (3) Children of NRI/OCI/PIO, Children of Indian workers in the Gulf countries, Foreign National:
                </h4>
                <p>
                (i) The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical or Vocational subjects, and obtained at least 50 % marks; 
                </p>
                <p>
                (ii) Any other criterion declared by appropriate authority from time to time.                
                </p>
              </li>
            </ul>

            <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
            <div className='overflow-x-auto mb-5'>
            <h3 className="mt-6 text-blue-900 font-bold text-lg">Required Documents for Maharashtra State Candidate</h3>
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
                    <td className="py-2 px-4">Allotment Letter of CAP (for CAP candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">SSC(STD: XTh) Mark list</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">HSC/DIPLOMA/B. Sc. Mark list</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">Transfer / Leaving Certificate of XII std.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">Proforma-I (for CAP candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">6</td>
                    <td className="py-2 px-4">Gap Certificate (if applicable)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">7</td>
                    <td className="py-2 px-4">Caste Certificate ( for Reserved Category CAP candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">8</td>
                    <td className="py-2 px-4">Caste Validity Certificate ( for Reserved Category CAP candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">9</td>
                    <td className="py-2 px-4">Non-Creamy Layer Certificate valid up to 31st March 2019 ( if applicable)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">Aadhaar card (UID Number)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">11</td>
                    <td className="py-2 px-4">Nationality Certificate or Birth Certificate or Passport</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">Domicile Certificate</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">13</td>
                    <td className="py-2 px-4">Passport size photograph- 03 Nos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          </motion.div>
        )}

        {/* Direct Second Year Engineering Content (conditionally rendered) */}
        {selectedYear === 'directSecondYear' && (
          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
            <h3 className="text-2xl font-medium text-gray-800 px-4 py-5">D.S.E. Courses</h3>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Sr. No.</th>
                  <th className="px-4 py-2">Course</th>
                  <th className="px-4 py-2">Choice Code</th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows for each course here (replace with your data) */}
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Mechanical Engineering</td>
                  <td className="py-2 px-4">620661210</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">Electronics Engineering</td>
                  <td className="py-2 px-4">620637610</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Computer Engineering</td>
                  <td className="px-4 py-2">620624510</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Information Technology</td>
                  <td className="px-4 py-2">620624610</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />    
          <div className='flex flex-col text-center my-2'>
            <hr />              
            <span className='text-blue-900 font-bold'>Download:</span>
            <a href="#" className="text-blue-500">DSE Admission Schedule-21-22</a>
          </div>
          <hr /> 


          <h3 className="mt-6 text-blue-900 font-bold text-lg">Eligibility Conditions And Requirements For Admissions:</h3>
          <p>
            The information is given below in brief. For details about Engineering Admission and Eligibility Criteria, refer DTE Maharashtra website          </p>
          <ul className='my-5'>

            <li className='mt-2 flex flex-col gap-4 text-lg'>
              <h4 className='text-blue-900 font-bold'>(1) For Maharashtra State Candidature Candidate and All India Candidature:</h4>
              <p>
              (i) The Candidate should be an Indian National;
              </p>
              <p>
              (ii) Passed Diploma Course in Engineering and Technology with at least 45% marks (40% marks in case of candidates of Backward class categories and Persons with Disability belonging to Maharashtra State only) in appropriate branch of Engineering and Technology from an All India Council for Technical Education or Central or State Government approved Institution or its equivalent;              
              </p>
              <span className=' text-blue-900 font-bold flex justify-center'>OR</span>
              <p>
              (ii) Passed B.Sc. Degree from a University Grants Commission (UGC) or Association of Indian Universities recognized University with at least 45% marks (40% in case of candidates of Backward class categories and Persons with Disability belonging to Maharashtra State only) and passed HSC with Mathematics as a subject Provided that students belonging to this category shall clear the subjects of Engineering Graphics/ Engineering Drawing and Engineering Mechanics of the first year Engineering Program along with second year subjects.              
              </p>
              <p>
              (iii) Any other criterion declared by appropriate authority from time to time.
              </p>
            </li>
          </ul>

          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
          <h3 className="mt-6 text-blue-900 font-bold text-lg">Required Documents for Maharashtra State Candidate for Direct Second Engineering Admission</h3>
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
                  <td className="py-2 px-4">Statement of Marks of SSC</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Statement of Marks of HSC (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">4</td>
                  <td className="py-2 px-4">Diploma Marksheet</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">Leaving Certificate / Transfer Certificate / Migration / Equivalent Certificate (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">6</td>
                  <td className="py-2 px-4">Certificate of Indian Nationality in the name of the Candidate</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">7</td>
                  <td className="py-2 px-4">Certificate of Indian Nationality in the name of the Candidate</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">8</td>
                  <td className="py-2 px-4">Certificate of Indian Nationality in the name of the Candidate</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">9</td>
                  <td className="py-2 px-4">Cast Validity (Proforma H)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">10</td>
                  <td className="py-2 px-4">Non-Creamy Layer Certificate valid up to 31st March 2019 (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">11</td>
                  <td className="py-2 px-4">Certificates in Proforma A, B, C, D, E and F as applicable</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">12</td>
                  <td className="py-2 px-4">Domicile Certificate (if applicable), clearly indicating the place of Permanent Residence of the Candidate / Father or Mother or Husband</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">13</td>
                  <td className="py-2 px-4">Gap Certificate (if applicable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">14</td>
                  <td className="py-2 px-4">Aadhaar Card (True Copy)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">15</td>
                  <td className="py-2 px-4">Any other relevant document</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">16</td>
                  <td className="py-2 px-4">Passport size photographs - 3 nos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default UGContent;
