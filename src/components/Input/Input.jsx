// Внешний
import React from 'react';
// Внутренний
import './Input.css';

function Input(props) {
  return (
    <>
      <input className='input-text' {...props} />
      <span className='input-text__error'></span>
    </>
  );
}

export default Input;
