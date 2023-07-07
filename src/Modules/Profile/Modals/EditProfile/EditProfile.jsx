// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';

function EditProfile({ open, handleClose }) {
  return (
    <Modal open={open} title={'Редактировать профиль'} onClose={handleClose}>
      <form noValidate>
        <Input
          type='text'
          name='name'
          placeholder='Ваше имя'
          required
          minLength='2'
          maxLength='40'
          autoFocus
        />
        <Input
          type='text'
          name='bio'
          placeholder='Ваша специальность'
          required
          minLength='2'
          maxLength='200'
        />
        <button className='modal__button' type='submit'>
          Сохранить
        </button>
      </form>
    </Modal>
  );
}

export default EditProfile;
