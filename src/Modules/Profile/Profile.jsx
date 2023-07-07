// Внешнее
import React, { useState, useEffect } from 'react';
// Внутренее
import { getProfile } from '../../api/profile';
// Modals
import CreateCard from '../Profile/Modals/CreateCard';
import EditProfile from '../Profile/Modals/EditProfile';
import EditAvatar from '../Profile/Modals/EditAvatar';
// Types
import { modalTypes } from './Modals/types/modals';

import avatar from './images/imageavatar.svg';
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState({});

  const [modal, setModal] = useState({ id: modalTypes.EMPTY });

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  const hideModal = () => setModal({ id: modalTypes.EMPTY });
  const showCreateCard = () => setModal({ id: modalTypes.CREATE_CARD });
  const showEditProfile = () => setModal({ id: modalTypes.EDIT_PROFILE });
  const showEditAvatar = () => setModal({ id: modalTypes.EDIT_AVATAR });

  const isCreateCardModalVisible = modalTypes.CREATE_CARD === modal.id;
  const isEditProfileModalVisible = modalTypes.EDIT_PROFILE === modal.id;
  const isEditAvatarModalVisible = modalTypes.EDIT_AVATAR === modal.id;

  return (
    <>
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

      {isCreateCardModalVisible && (
        <CreateCard open={isCreateCardModalVisible} handleClose={hideModal} />
      )}
      {isEditProfileModalVisible && (
        <EditProfile open={isEditProfileModalVisible} handleClose={hideModal} />
      )}
      {isEditAvatarModalVisible && (
        <EditAvatar open={isEditAvatarModalVisible} handleClose={hideModal} />
      )}
    </>
  );
}

export default Profile;
