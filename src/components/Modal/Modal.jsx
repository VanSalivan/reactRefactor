// Внешний
import React from 'react';
import { createPortal } from 'react-dom';
// Внутренний
import './Modal.css';

function Modal({ open, title, children, handleClose }) {
  return createPortal(
    <div className={`modal ${open ? 'active' : ''}`}>
      <div className='modal__container'>
        <div className='modal__content'>
          <h2 className='modal__title'>{title}</h2>
          {children}
        </div>
        <button className='modal__close-icon' onClick={handleClose} />
      </div>
    </div>,
    document.body,
    title
  );
}

export default Modal;
