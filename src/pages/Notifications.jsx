import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Pagination from '../Components/Pagination';
import Navbar from '../Components/Navbar/Navbar';
import Filter from '../Components/Filter';
import Footer from '../Components/Footer/Footer';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [notificationsPerPage] = useState(5);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data.reverse());
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(filter.toLowerCase()) ||
    notification.description.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = filteredNotifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen my-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Official Notifications</h1>
          <Filter filter={filter} setFilter={setFilter} />
          <div className="grid grid-cols-1 gap-6 mt-6">
            {currentNotifications.map((notification) => (
              <motion.div
                key={notification._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-bold text-orange-400 mb-2">{notification.title}</h2>
                <p className="text-gray-700">{notification.description}</p>
                <p className="text-gray-500 text-sm mt-2">
                  From: {new Date(notification.startDate).toLocaleDateString()} To: {new Date(notification.endDate).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </div>
          {filteredNotifications.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No notifications found.</p>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredNotifications.length / notificationsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;
