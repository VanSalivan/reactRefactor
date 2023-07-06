// Внешнее
import React, { useState } from 'react';
// components
import CardList from '../../modules/CardList/CardList';
import Profile from '../../modules/Profile/Profile';
// Modals
import ModalCreateCard from '../../modules/Modals/ModalCreateCard';

function Content() {
  const [openModal, setOpenModal] = useState(false);

  const handleToogleModal = () => setOpenModal(!openModal);

  return (
    <main>
      <ModalCreateCard open={openModal} handleClose={handleToogleModal} />
      <Profile openCreateModal={handleToogleModal} />
      <CardList />
    </main>
  );
}

export default Content;
