import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const ProfessionalInstitutesAbout = () => {
  const ProfessionalInstitutesAboutText = (
    <div className="ProfessionalInstitutesAbout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Professional Institues</h2>
        </div>
        <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={"list-disc pl-4 mt-4 text-gray-700 flex flex-col gap-5"}>
        <li>PDEA'S Institute of Technology,Hadapsar,Pune - 28</li>
        <li>PDEA's Mahatama Phule Institute of Management & Computer Studies,Hadapser. Pune - 28
        </li>
        <li>PDEA's Institute of Technical Education,Research & Management,Akurdi. Pune - 44
        </li>
        <li>PDEA's Baburaoji Ghople Multipurpose INstitute,Sangvi,Pune - 27
        </li>
        <li>PDEA's Sheth Govind Raghunath Sable College of Pharmacy,Saswad. Pune - 412301
        </li>
        <li>PDEA's Shankaroa Ursal College of Pharamacy(Diploma).Kharadi,Pune - 14
        </li>
        <li>PDEA's Shankaroa Ursal College of Pharmaceuticalo Sciences & Research,Kharadi,Pune - 14
        </li>
        <li>PDEA's College of Ayurved and Reasearch Center, Akurdi, Pune- 44
        </li>
        <li>PDEA's Vidhi Mahavidyalay,Hadpsar. pune - 28
        </li>
        <li>PDEA's Institute of Diploma in Education,Kharadi. Pune -14
        </li>
      </motion.ul>
      
    </div>
  );

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={"px-4 py-6 bg-gray-100 rounded-lg flex flex-col"}
    >
    {ProfessionalInstitutesAboutText}
    </motion.div>
  );
};

export default ProfessionalInstitutesAbout;