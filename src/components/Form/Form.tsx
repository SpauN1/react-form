import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Form.module.scss';

import { MyInput } from '../UI/MyInput/MyInput';
import { MyButton } from '../UI/MyButton/MyButton';
import { IForm } from '../../models/form';

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
    reset();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <MyInput
        {...register('email', {
          required: 'Введите email',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Введите корректный email',
          },
        })}
        label="Ваш email"
        placeholder="example@gmail.com"
        type="email"
        error={errors.email?.message}
      />
      <MyInput
        {...register('password', {
          required: 'Введите пароль',
          minLength: {
            value: 5,
            message: 'Минимальная длина пароля - 5 символов',
          },
        })}
        label="Ваш пароль"
        placeholder="*****"
        type="password"
        error={errors.password?.message}
      />
      <div className={styles.buttonGroup}>
        <MyButton type="submit" className={styles.formButtonLarge}>
          Отправить
        </MyButton>
        <MyButton
          type="button"
          className={styles.formButtonSmall}
          onClick={handleReset}
        >
          Очистить
        </MyButton>
      </div>
    </form>
  );
};
