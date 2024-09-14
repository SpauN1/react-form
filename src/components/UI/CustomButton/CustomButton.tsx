import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './CustomButton.module.scss';

interface IMyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const CustomButton: FC<IMyButtonProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.CustomButton, className, {
        [styles.disabled]: disabled,
      })}
      // const buttonClasses = `${styles.myButton} ${className || ''} ${disabled ? styles.disabled : ''}`.trim();
      // без использования clsx :)
      {...props}
    >
      {children}
    </button>
  );
};
