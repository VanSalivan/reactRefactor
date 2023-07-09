// Внешний
import React from 'react';
// Внутренний
import './Button.css';

function Button({ children, disabled, onClick }) {
  return (
    <button className='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
