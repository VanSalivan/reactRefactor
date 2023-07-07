// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../components/Modal';

function EditAvatar({ open, handleClose }) {
  return (
    <Modal open={open} title={'Обновить аватар'} onClose={handleClose}>
      <form noValidate>
        <div class='modal__inputs'>
          <input
            type='url'
            id='modal__inputs_profile-avatar'
            name='profile__avatar'
            class='modal__inputs-text'
            placeholder='Ссылка'
            required
          />
          <span
            class='modal__inputs-text-error'
            id='error-modal__inputs_profile-avatar'
          ></span>
        </div>
        <button class='modal__button' type='submit'>
          Сохранить
        </button>
      </form>
    </Modal>
  );
}

export default EditAvatar;
