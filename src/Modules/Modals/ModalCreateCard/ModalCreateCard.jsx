// Внешний
import React from 'react';
// Внутренний
import Modal from '../../../components/Modal';

function ModalCreateCard({ open, handleClose }) {
  return (
    <Modal open={open} title={'Новое место'} handleClose={handleClose}>
      <form noValidate>
        <div className='modal__inputs'>
          <input
            type='text'
            id='modal__inputs_place_name'
            className='modal__inputs-text'
            name='place_name'
            placeholder='Название'
            required
            minLength='2'
            maxLength='30'
          />
          <span
            className='modal__inputs-text-error'
            id='error-modal__inputs_place_name'
          ></span>
          <input
            type='url'
            id='modal__inputs_place_link'
            name='place_link'
            className='modal__inputs-text'
            placeholder='Ссылка'
            required
          />
          <span
            className='modal__inputs-text-error'
            id='error-modal__inputs_place_link'
          ></span>
        </div>
        <button className='modal__button' type='submit' id='card-submit'>
          Создать
        </button>
      </form>
    </Modal>
  );
}

export default ModalCreateCard;
