import { FC } from 'react';
import styles from './Form.module.scss';
import { MyInput } from '../UI/MyInput/MyInput';

export const Form: FC = () => {
  return (
    <form className={styles.form}>
      <MyInput
        label={'Ваше имя'}
        placeholder="Введите имя"
        type={'text'}
      ></MyInput>
      <MyInput
        label={'Ваш пароль'}
        placeholder="Введите пароль"
        type={'password'}
      ></MyInput>
    </form>
  );
};
