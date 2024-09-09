import { FC } from 'react';

import styles from './MyInput.module.scss';

interface IMyInput {
  label: string;
  placeholder: string;
  type: string;
}

export const MyInput: FC<IMyInput> = ({ label, placeholder, type }) => {
  return (
    <>
      <label className={styles.label}>
        <h3>{label}</h3>
        <input
          placeholder={placeholder}
          type={type}
          className={styles.myInput}
        />
      </label>
    </>
  );
};
