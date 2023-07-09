// Внешний
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Внутренний
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

function EditProfile({ open, handleClose }) {
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
    <Modal open={open} title={'Редактировать профиль'} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`input-text ${
            errors?.name?.message ? 'input-text_invalid' : ''
          }`}
          type='text'
          placeholder='Ваше имя'
          {...register('name', {
            required: 'Поле обязательно к заполенению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 40,
              message: 'Максимум 40 символов',
            },
          })}
        />
        <span className='input-text__error'>{errors?.name?.message}</span>
        <input
          className={`input-text ${
            errors?.bio?.message ? 'input-text_invalid' : ''
          }`}
          type='text'
          placeholder='Ваша специальность'
          {...register('bio', {
            required: 'Поле обязательно к заполенению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 200,
              message: 'Максимум 200 символов',
            },
          })}
        />
        <span className='input-text__error'>{errors?.bio?.message}</span>
        <Button disabled={!isValid}>Сохранить</Button>
      </form>
    </Modal>
  );
}

export default EditProfile;
