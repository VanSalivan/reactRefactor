// Внешний
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Внутренний
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
// import Input from '../../../../components/Input';

function CreateCard({ open, handleClose }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setFocus,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setFocus('place_name');
  }, []);

  return (
    <Modal open={open} title={'Новое место'} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`input-text ${
            errors?.place_name?.message ? 'input-text_invalid' : ''
          }`}
          type='text'
          placeholder='Название'
          {...register('place_name', {
            required: 'Поле обязательно к заполенению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов',
            },
          })}
        />
        <span className='input-text__error'>{errors?.place_name?.message}</span>
        <input
          className={`input-text ${
            errors?.place_link?.message ? 'input-text_invalid' : ''
          }`}
          type='url'
          placeholder='Ссылка'
          {...register('place_link', {
            required: 'Поле обязательно к заполенению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
          })}
        />
        <span className='input-text__error'>{errors?.place_link?.message}</span>
        <Button disabled={!isValid}>Создать</Button>
      </form>
    </Modal>
  );
}

export default CreateCard;
