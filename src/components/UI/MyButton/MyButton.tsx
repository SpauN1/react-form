import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './MyButton.module.scss';

interface IMyButtonProps {
  children: ReactNode;
  className: string;
}

export const MyButton: FC<IMyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={clsx(styles.myButton, className)} {...props}>
      {children}
    </button>
  );
};
