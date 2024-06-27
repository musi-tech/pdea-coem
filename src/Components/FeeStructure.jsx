import React from 'react';

function FeeStructure() {
  return (
    <div className="fee-structure px-4 py-6 bg-gray-100 rounded-lg">
      <h2>Fee Structure</h2>
      <p className="mt-4">Please refer to the following links for detailed fee structure:</p>
      <ul className="list-none pl-4 mt-4 flex flex-col gap-y-5 my-5">
        <li className="mb-2">
          <a href="#" className="text-blue-500 underline">Fee Structure FE 2024-25</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">Fee Structure For FE 2023-24</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">Fee Structure For FE 2022-23</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">FEE Structure of DSE for 2021-22</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">Fee structure of First Year Engineering 2021-22</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">MBA Fee Structure for 2020-21</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">MBA Fee Structure for 2021-22</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">FEE Structure of FE & DSE for 2020-21</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 underline">FEE Structure of FE & DSE for 2019-20</a>
        </li>
        {/* Add additional fee structure links if needed */}
      </ul>
    </div>
  );
}

export default FeeStructure;
