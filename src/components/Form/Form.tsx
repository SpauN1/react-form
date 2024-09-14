import { FC, useEffect, useState } from 'react';
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

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data);
    setIsDisabled(true);
  };

  useEffect(() => {
    if (isDisabled) {
      const timer = setTimeout(() => {
        reset();
        setIsDisabled(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isDisabled, reset]);

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
        <MyButton
          type="submit"
          className={styles.formButtonLarge}
          disabled={isDisabled}
        >
          Отправить
        </MyButton>
        <MyButton
          type="reset"
          className={styles.formButtonSmall}
          onClick={handleReset}
          disabled={isDisabled}
        >
          Очистить
        </MyButton>
      </div>
    </form>
  );
};
