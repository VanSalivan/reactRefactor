// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';

function CreateCard({ open, handleClose }) {
  return (
    <Modal open={open} title={'Новое место'} onClose={handleClose}>
      <form noValidate>
        <Input
          type='text'
          name='place_name'
          placeholder='Название'
          required
          minLength='2'
          maxLength='30'
          autoFocus
        />
        <Input type='url' name='place_link' placeholder='Ссылка' required />
        <button className='modal__button' type='submit' id='card-submit'>
          Создать
        </button>
      </form>
    </Modal>
  );
}

export default CreateCard;
