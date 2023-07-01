// Внешнее
import React from 'react';
// Внутренее
import avatar from '../../assets/images/imageavatar.svg';

import './Profile.css';

function Profile() {
  return (
    <section class='profile'>
      <div class='profile__avatar-container'>
        <img src={avatar} alt='Фотография человека' class='profile__avatar' />
        <button class='profile__avatar-button'/>
      </div>
      <div class='profile__info'>
        <h1 class='profile__author'>223</h1>
        <button class='profile__edit' type='button' />
        <p class='profile__bio'>111</p>
      </div>
      <button class='profile__add-button' type='button' />
    </section>
  );
}

export default Profile;
