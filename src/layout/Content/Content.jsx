// Внешнее
import React, { useState } from 'react';
// components
import CardList from '../../modules/CardList/CardList';
import Profile from '../../modules/Profile/Profile';
// Modals
import CreateCard from '../../modules/Modals/CreateCard';
import EditProfile from '../../modules/Modals/EditProfile';
import EditAvatar from '../../modules/Modals/EditAvatar';
// Types
import { modalTypes } from '../../types/Modals';

function Content() {
  const [modal, setModal] = useState({ id: modalTypes.EMPTY });

  const hideModal = () => setModal({ id: modalTypes.EMPTY });
  const showCreateCard = () => setModal({ id: modalTypes.CREATE_CARD });
  const showEditProfile = () => setModal({ id: modalTypes.EDIT_PROFILE });
  const showEditAvatar = () => setModal({ id: modalTypes.EDIT_AVATAR });

  const isCreateCardModalVisible = modalTypes.CREATE_CARD === modal.id;
  const isEditProfileModalVisible = modalTypes.EDIT_PROFILE === modal.id;
  const isEditAvatarModalVisible = modalTypes.EDIT_AVATAR === modal.id;

  return (
    <main>
      {isCreateCardModalVisible && (
        <CreateCard open={isCreateCardModalVisible} handleClose={hideModal} />
      )}{' '}
      {isEditProfileModalVisible && (
        <EditProfile open={isEditProfileModalVisible} handleClose={hideModal} />
      )}
      {isEditAvatarModalVisible && (
        <EditAvatar open={isEditAvatarModalVisible} handleClose={hideModal} />
      )}
      <Profile
        showCreateCard={showCreateCard}
        showEditProfile={showEditProfile}
        showEditAvatar={showEditAvatar}
      />
      <CardList />
    </main>
  );
}

export default Content;
