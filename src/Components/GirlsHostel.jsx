import React from 'react';
import { motion } from 'framer-motion';
import GallerySection from '../Components/academics/GallerySection'

const galleryImages = [
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyAAAYashodatta%20Hostel.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel%20Lobbee.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel%20Water%20Purifier.jpg",
  "https://pdeacoem.s3.us-east-2.amazonaws.com/miscphotos/BoyBoys%20Hostel.jpg",
];

function GirlsHostel() {


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
          <h2 className="text-2xl font-bold">Girl's Hostel</h2>
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
                  <td className="py-2 px-4">P.D.E.A'S GIRLS HOSTEL</td>
                  <td className="py-2 px-4">60</td>
                  <td className="py-2 px-4">Rs. 48000/- per year with mess, for per month 3800</td>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Mineral Water,Electric Water Heater, Mess ( Breakfast, Lunch, Diner), Cupboard, Cot, Table, CCTV, Wi-Fi facility, Indoor games (Gymnasium ), Laundry, Per Room 2 Seat, 3 Seat & Common Rooms, Parking, Guest Room</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">AIRAWAT GIRLS HOSTEL</td>
                  <td className="py-2 px-4">30</td>
                  <td className="py-2 px-4">Hostel Fees (Without Mess) Per Year :- Rs. 20,400/,Hostel Fees Per Month:-Rs.I700/,Mess Fees Per Month:-Rs. 3000/,Deposite :4,000/</td>
                  <td className="py-2 px-4">03/02</td>
                  <td className="py-2 px-4">	Mineral Water, Mess (Lunch, Diner), Cupboard , Cot, Table , CCTV, Wi-Fi facility, Per Room 3 Seat + 2 Seat</td>
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
                  <td className="py-2 px-4">Mr. Taware</td>
                  <td className="py-2 px-4">Rector</td>
                  <td className="py-2 px-4">9762999666</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">Prof.V.R.Mahajan</td>
                  <td className="py-2 px-4">Rector</td>
                  <td className="py-2 px-4">9356751625</td>
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

export default GirlsHostel ;


