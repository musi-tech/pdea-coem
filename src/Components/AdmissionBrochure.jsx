import React from 'react';

function AdmissionBrochure() {
  return (
    <div className="admission-brochure px-4 py-6 bg-gray-100 rounded-lg">
      <h2>Admission Brochure</h2>
      <p className="mt-4">Download the latest admission brochure for the academic year 2024-25:</p>
      <ul className="list-disc pl-4 mt-4">
        <li>
          <a href="#" className="text-blue-500 underline">2024-25 Admission Brochure</a>
        </li>
        {/* Add additional brochures if needed */}
      </ul>
    </div>
  );
}

export default AdmissionBrochure;
