// Внешнее
import React, { useState, useEffect } from 'react';
// Внутренее
import { getProfile } from '../../api/profile';

import avatar from '../../assets/images/imageavatar.svg';
import './Profile.css';

function Profile({ showCreateCard, showEditProfile, showEditAvatar }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  return (
    <section className='profile'>
      <div className='profile__avatar-container'>
        <img
          src={profile.avatar || avatar}
          alt='Фотография человека'
          className='profile__avatar'
        />
        <button className='profile__avatar-button' onClick={showEditAvatar} />
      </div>
      <div className='profile__info'>
        <h1 className='profile__author'>{profile.name}</h1>
        <button
          className='profile__edit'
          type='button'
          onClick={showEditProfile}
        />
        <p className='profile__bio'>{profile.about}</p>
      </div>
      <button className='profile__add-button' onClick={showCreateCard} />
    </section>
  );
}

export default Profile;
