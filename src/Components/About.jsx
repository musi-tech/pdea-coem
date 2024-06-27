import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const About = () => {
  const aboutText = (
    <div className="about-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">About PDEA</h2>
        </div>
      <span className=' text-blue-900'>Pune District Education Assocition is well known educational Society founded by the dedicated team of social reformers, lead by Ex-Chief Officer of Z. P. Pune, Late Shri. Baburaoji Gholap and has a standing over 67 years in the field of education. The year 2003-04 was the birth centenary year of our founder secretary. We are proud to mention that PDEA has received the prestigious, "Best Educational Institute Award" from the Government of Maharashtra for the remarkable achievement in the field of education and social work, 5th September 2000.</span>
      <span className=' text-blue-900'>The Associtian runs diffrent branches like Pre-Primary Schools (Marathi and English Medium)-11, Primary Schools-12, Secondary Schools-61, Higher Secondary Schools-31, Vocational Cources-25, Senior Colleges (Multi Facility) - 08, Ayurved College and Research Center - 01, Pharmacy Colleges -02, Management Instistutes - 03, Polytechnic Institutes - 01, Engineering College - 01, Law College - 01 and D. Ed College - 01.</span>
      <span className=' text-blue-900'>The assocition has made up of its leeway since 1941. In the year of 1983, a young dynamic leader Prof. Ramkrishna More (Ex. Minister of Education, Sports and Youth Welfare and Culture - Government of Maharastra) took charge of PDEA as "President". During his tenure, Prof. Ramkrishna More has accelrated the activities of PDEA with an objective of contributing to the intellectual and social transformation in different area like educational, social and cultural. All the institutes of PDEA have made remarkable progress in the field of education under his leadership.</span>
      <span className=' text-blue-900'>In the year 2006, Inspire - Visionary-Many more years of success in all the ways of life -Young and dynamic wishing leader, Honorable Ajit Pawar, (Ex. Deputy Chief Minister - Government of Maharastra), took the charge of "President" of PDEA by legacy.</span>
      <span className=' text-blue-900'>He is inspitring inner and spirtual strength of PDEA family viz Life members, Employees and Students. All the brances of PDEA is now taking global speed towards the destination.</span>
    </div>
  );


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {aboutText}
    </motion.div>
  );
};

export default About;
