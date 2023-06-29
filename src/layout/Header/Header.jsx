// Внешнее
import React from 'react';
// Внутренее
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <img
        src="<%=require('./src/images/Vectorheader__logo.svg')%>"
        alt='Логотип Место'
        className='header__logo'
      />
    </header>
  );
}

export default Header;
