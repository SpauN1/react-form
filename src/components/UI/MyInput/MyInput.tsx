import { FC, InputHTMLAttributes } from 'react';

import styles from './MyInput.module.scss';

interface IMyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const MyInput: FC<IMyInputProps> = ({ label, ...props }) => {
  return (
    <>
      <label className={styles.label}>
        <h3>{label}</h3>
        <input {...props} className={styles.myInput} />
      </label>
    </>
  );
};
