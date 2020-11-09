import React from 'react';
import clx from 'classnames';

import s from './Buton.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  color?: 'yellow' | 'green';
  size?: 'defaultSize' | 'narrowSize';
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  fullWidth = false,
  color = 'green',
  size = 'defaultSize',
}) => {
  const classes = clx({ [s.root]: true, [s.fullWidth]: fullWidth, [s[color]]: color, [s[size]]: true });
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
