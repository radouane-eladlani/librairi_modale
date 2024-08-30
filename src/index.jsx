import './Modal.css';
import React from 'react';


const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay pour le fond transparent */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Contenu de la modale */}
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
