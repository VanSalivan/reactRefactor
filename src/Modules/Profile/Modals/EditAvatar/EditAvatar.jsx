// Внешний
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Внутренний
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';

function EditAvatar({ open, handleClose }) {
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
    <Modal open={open} title={'Обновить аватар'} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`input-text ${
            errors?.avatar?.message ? 'input-text_invalid' : ''
          }`}
          type='url'
          placeholder='Ссылка'
          {...register('avatar', {
            required: 'Поле обязательно к заполенению',
          })}
        />
        <span className='input-text__error'>{errors?.avatar?.message}</span>
        <Button disabled={!isValid}>Сохранить</Button>
      </form>
    </Modal>
  );
}

export default EditAvatar;
