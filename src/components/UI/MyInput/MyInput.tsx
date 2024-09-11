import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

import styles from './MyInput.module.scss';

import { IForm } from '../../../models/form';

export interface IMyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<IForm>;
  label: string;
  error?: string;
}

export const MyInput = forwardRef<HTMLInputElement, IMyInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <label className={styles.label}>
        <h3>{label}</h3>
        <input
          ref={ref}
          {...props}
          className={clsx(styles.myInput, { [styles.error]: error })}
          // className={`${styles.myInput} ${error ? styles.error : ''}`} без использования clsx :)
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </label>
    );
  }
);
