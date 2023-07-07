// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../components/Modal';

function EditProfile({ open, handleClose }) {
  return (
    <Modal
      open={open}
      title={'Редактировать профиль'}
      onClose={handleClose}
    >
      <form noValidate>
        <div class='modal__inputs'>
          <input
            type='text'
            id='modal__inputs_name'
            class='modal__inputs-text'
            name='name'
            placeholder='Ваше имя'
            required
            minlength='2'
            maxlength='40'
          />
          <span
            class='modal__inputs-text-error'
            id='error-modal__inputs_name'
          ></span>
          <input
            type='text'
            id='modal__inputs_bio'
            name='bio'
            class='modal__inputs-text'
            placeholder='Ваша специальность'
            required
            minlength='2'
            maxlength='200'
          />
          <span
            class='modal__inputs-text-error'
            id='error-modal__inputs_bio'
          ></span>
        </div>
        <button class='modal__button' type='submit' id='profile-submit'>
          Сохранить
        </button>
      </form>
    </Modal>
  );
}

export default EditProfile;
