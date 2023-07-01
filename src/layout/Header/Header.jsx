// Внешнее
import React from 'react';
// Внутренее
import logo from '../../assets/images/logo.svg';

import './Header.css';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Логотип Место' className='header__logo' />
    </header>
  );
}

export default Header;
