// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../components/Modal';
import Input from '../../../components/Input';

function EditAvatar({ open, handleClose }) {
  return (
    <Modal open={open} title={'Обновить аватар'} onClose={handleClose}>
      <form noValidate>
        <Input type='url' placeholder='Ссылка' required autoFocus />
        <button className='modal__button' type='submit'>
          Сохранить
        </button>
      </form>
    </Modal>
  );
}

export default EditAvatar;
