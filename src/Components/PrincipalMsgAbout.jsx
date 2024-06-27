import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)
import principalImg from '../assets/images/Principal.jpg'

const PrincipalMsgAbout = () => {
  const principalmsgaboutText = (
    <div className="principalmsgprincipalmsgabout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Principal's Message</h2>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row gap-10 justify-center ml-20 ">
        <div className="image-msg-about">
          <img
            className="rounded-md min-w-44" // Added rounded corners for better styling
            src={principalImg}
            alt="principal of PDEA"
          />
        </div>
        <div className="content-img-msg-about flex flex-col font-bold text-blue-900 " >
          <span>Dr. R. V. Patil</span>
          <span>Principal</span>
          <span>PDEA's College of Engineering, Manjari (Bk.)</span>
        </div>
      </div>
      <span className="text-blue-900">It is my immense pleasure to welcome you to the creative world of Engineering. PDEA's College of Engineering, Manjari (Bk) at Pune, is a prominent engineering education center, located in the heart of Pune City. PDEA COEM believe that imparting knowledge to the students is a process of giving them the skills, Professionalism, vision and wisdom for their overall development, apart from giving them the lessons in Engineering.</span>
      <span className="text-blue-900">We have a team of skilled, experienced and dedicated Professors, administrative and non-teaching staff who are committed to achieving excellence in the every activity of the institute. We maintain clarity in our working and possess an excellent infrastructure, well equipped engineering departments, libraries, training and Placement cell, sports facilities, well lit class rooms, seminar rooms and Auditorium Hall where the students are exposed to thought provoking and inspiring seminars and guest lecturers apart from the regular lectures, cultural activities and sports activities, thus, making learning an interesting process for the students.</span>
      <span className="text-blue-900">In the global scenario, professional education in India plays a key role since Indian professionals contribute considerably to the knowledge bank of the world. In this context, our professional training should be characterized by judicious blend of the values of our ancient wisdom and the rapidly changing concepts in technology and management. We are committed to empower youth of today with knowledge and leadership qualities that will enable them to not only stand on their own feet but be the world leaders in some field or the other.</span>
    
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {principalmsgaboutText}
    </motion.div>
  );
};

export default PrincipalMsgAbout;
