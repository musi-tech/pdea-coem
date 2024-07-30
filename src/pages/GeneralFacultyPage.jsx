// src/pages/GeneralFacultyPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherCard from '../Components/academics/TeacherCard';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { motion } from 'framer-motion';

const GeneralFacultyPage = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-blue-500 text-white my-32 py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Esteemed Faculty</h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the brilliant minds shaping the future at our college.
          </p>
        </motion.div>
      </div>
      <div className=" p-6 min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          {faculty.length === 0 ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <p className="text-lg font-medium text-gray-600">No faculty available to display</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralFacultyPage;
