import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)
import PresidentImg from '../assets/images/Presedent.jpg'

const PresidentMsgAbout = () => {
  const presidentmsgaboutText = (
    <div className="presidentmsgpresidentmsgabout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">President's Message</h2>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row gap-10 justify-center ml-20 ">
        <div className="image-msg-about">
          <img
            className="rounded-md min-w-42" // Added rounded corners for better styling
            src={PresidentImg}
            alt="President of PDEA"
          />
        </div>
        <div className="content-img-msg-about flex flex-col font-bold text-blue-900 " >
          <span>Shri. Ajit Pawar</span>
          <span>Hon. President</span>
          <span>Pune District Education Association, Pune</span>
        </div>
      </div>
      <span className="text-blue-900">
        Our vision is based on hard work, open communication, a strong emphasis on team work and a high level of responsibility. This visionary culture allows and emphasizes our wards not only to adopt the present day challenges but also individual responsibilities to the society and our nation at large.
      </span>
      <span className="text-blue-900">
        Learning should be based on doing things and not merely knowing things. Until and unless learning solutions relate to real life and motivate the learner to acquire and apply the knowledge, the whole process will remain superficial. Any engineering institution worth its name looks to optimize the productivity of global leaders. Our institution has set specific objectives and planned activities for achieving excellence in all spheres of technical education.
      </span>
      <span className="text-blue-900">
        The service of the institution in creating personally mature, professionally equipped and service-oriented graduates is really worth mentioning. We strongly believe in academic excellence and do not compromise on teaching standards or discipline. These three things are the springboards on which we operate.
      </span>
      <div className="flex flex-col text-center gap-2 my-5">
        <h4 className="text-lg font-bold">SUCCESS IS A JOURNEY NOT A DESTINATION</h4>
        <span>Ensure That You Are In The Right Direction, Instead Of Just At The Right Speed.</span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {presidentmsgaboutText}
    </motion.div>
  );
};

export default PresidentMsgAbout;
