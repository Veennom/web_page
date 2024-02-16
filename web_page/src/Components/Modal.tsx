import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className='modal-overlay' onClick={handleOverlayClick}>
          <div className='modal'>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
