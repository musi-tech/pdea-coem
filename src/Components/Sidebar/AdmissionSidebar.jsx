import React from 'react';

const AdmissionSidebar = ({ activeSection, onSectionChange }) => {
  const sections = [
    'UG',
    'PG',
    'Admission Brochure',
    'Fee Structure',
    'Discipline & Conduct',
  ];

  return (
    <div
      className={`sidebar flex flex-col gap-3 p-10 rounded-lg shadow-md font-light text-md cursor-pointer bg-white w-1/5`}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`text-left py-2 px-4 text-black hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500`}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default AdmissionSidebar;
