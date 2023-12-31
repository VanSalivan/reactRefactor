// Внешний
import React from 'react';
import { createPortal } from 'react-dom';
// Внутренний
import './Modal.css';

function Modal({ open, title, children, onClose }) {
  const stopPropagation = (e) => e.stopPropagation();

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div
      className={`${open ? 'modal active' : 'modal'}`}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div className='modal__container' onClick={stopPropagation}>
        <div className='modal__content'>
          <h2 className='modal__title'>{title}</h2>
          {children}
        </div>
        <button className='modal__close-icon' onClick={onClose} />
      </div>
    </div>,
    document.body,
    title
  );
}

export default Modal;
