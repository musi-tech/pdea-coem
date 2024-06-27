import React, { useState } from 'react';
import Modal from './Modal';

const ApplyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmApply = () => {
    setIsModalOpen(false);
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd9G3Cg_F7Zwdr2UOhpI_5T8sUDNE4zmWV3eZ7TBq2Jnq8cRg/viewform', '_blank');
  };

  return (
    <div>
      <button className="apply-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleApplyClick}>
        Apply Now
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmApply} />
    </div>
  );
};

export default ApplyButton;
