import { FC } from 'react';
import styles from './Form.module.scss';
import { MyInput } from '../UI/MyInput/MyInput';
import { MyButton } from '../UI/MyButton/MyButton';

export const Form: FC = () => {
  return (
    <form className={styles.form}>
      <MyInput label="Ваше имя" placeholder="Введите имя" type="text" />
      <MyInput
        label="Ваш пароль"
        placeholder="Введите пароль"
        type="password"
      />
      <div className={styles.buttonGroup}>
        <MyButton className={styles.formButtonLarge}>Отправить</MyButton>
        <MyButton className={styles.formButtonSmall}>Очистить</MyButton>
      </div>
    </form>
  );
};
