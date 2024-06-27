import React, { useState, useEffect, useRef } from 'react';

const statisticsData = [
  { id: 1, title: 'Total Students', targetNumber: 4500 },
  { id: 2, title: 'Students Placed', targetNumber: 3800 },
  { id: 3, title: 'Total Students', targetNumber: 4500 }, // Duplicate entries for demonstration
  { id: 4, title: 'Students Placed', targetNumber: 3800 },
];

const Statistic = () => {
  const [counts, setCounts] = useState(
    statisticsData.map((data) => ({ id: data.id, count: 0 })) // Initialize with objects containing id and count
  );

  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = statisticsData.map((data) =>
        setInterval(() => {
          setCounts((prevCounts) =>
            prevCounts.map((item) =>
              item.id === data.id
                ? { ...item, count: Math.min(item.count + 10, data.targetNumber) }
                : item
            )
          );
        }, 10)
      );

      return () => intervals.forEach(clearInterval); // Cleanup function to clear intervals
    }
  }, [isVisible]);

  return (
    <section ref={statRef} className="statistics-container grid grid-flow-row mx-5 md:grid-flow-col bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="stats-text-column flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-black">College Achievements</h2>
        <p>
          {/* Your content here */}
        </p>
      </div>
      <div className="stats-grid-column grid grid-cols-1 md:grid-cols-2 gap-4">
        {statisticsData.map((data) => (
          <div key={data.id} className="stat-item bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
            <h3>{data.title}</h3>
            <h1 className="stat-number text-3xl font-bold text-orange-500">
              {counts.find((item) => item.id === data.id).count}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
