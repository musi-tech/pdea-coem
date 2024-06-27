import React from 'react';
import { motion } from 'framer-motion';
import GallerySection from '../Components/academics/GallerySection'

const galleryImages = [
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyAAAYashodatta%20Hostel.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel%20Lobbee.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel%20Water%20Purifier.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel.jpg",
];

function BoysHostel() {


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
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Boy's Hostel</h2>
        </div>
          <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">NAME OF HOSTEL</th>
                  <th className="px-4 py-2">INTAKE CAPACITY</th>
                  <th className="px-4 py-2">FEE STRUCTURE</th>
                  <th className="px-4 py-2">STUDENTS PER ROOM</th>
                  <th className="px-4 py-2">FACILITIES PROVIDED</th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows for each course here (replace with your data) */}
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Yashodutta Boys Hostel</td>
                  <td className="py-2 px-4">113</td>
                  <td className="py-2 px-4">1700/Per Month</td>
                  <td className="py-2 px-4">03/4/5</td>
                  <td className="py-2 px-4">WIFI connection, Water Heater, CCTV, Water Purifier, & Security</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Airawat Boys Hostel</td>
                  <td className="py-2 px-4">100</td>
                  <td className="py-2 px-4">1700/Per Month</td>
                  <td className="py-2 px-4">4/5</td>
                  <td className="py-2 px-4">WIFI connection,Water Heater, CCTV, Water Purifier, & Security</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Swanand Boys Hostel</td>
                  <td className="py-2 px-4">44</td>
                  <td className="py-2 px-4">1700/Per Month</td>
                  <td className="py-2 px-4">03</td>
                  <td className="py-2 px-4">WIFI connection,Water Heater, CCTV, Water
                  Purifier, Security</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Name of Staff</th>
                  <th className="px-4 py-2">Post</th>
                  <th className="px-4 py-2">Cell No.</th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows for each course here (replace with your data) */}
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Mr. R.V.Patil</td>
                  <td className="py-2 px-4">Principal</td>
                  <td className="py-2 px-4">9850660498</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Mr. Deepak Kunjir (Yashodatta Boyes Hostel)</td>
                  <td className="py-2 px-4">Rector</td>
                  <td className="py-2 px-4">9822783132</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Mr. Santosh Taware (AIRAWAT Boyés Hostel)</td>
                  <td className="py-2 px-4">Rector</td>
                  <td className="py-2 px-4">8668573794</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Mr. Durvesh Khore (Swanand Boyes Hostel)</td>
                  <td className="py-2 px-4">Rector</td>
                  <td className="py-2 px-4">8830732234</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Prof. Shirsath SS (AIRAWAT Boyes Hostel)</td>
                  <td className="py-2 px-4">Hostel Incharge</td>
                  <td className="py-2 px-4">9960940323</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Prof. V D Bhosale (Yashodatta Boyés Hostel)</td>
                  <td className="py-2 px-4">Hostel Incharge</td>
                  <td className="py-2 px-4">8007988915</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Mr. Santosh Takawale (Swanand Boyes Hostel)</td>
                  <td className="py-2 px-4">Hostel Incharge</td>
                  <td className="py-2 px-4">9881099631</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className=" bg-gray-100 " id='gallerySection'> 
        <GallerySection galleryImages={galleryImages} />
      </div>
      </div>
    </motion.div>
  );
}

export default BoysHostel ;


