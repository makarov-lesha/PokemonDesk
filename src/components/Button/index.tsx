import React from 'react';

import s from './Buton.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={s.root}>
      {children}
    </button>
  );
};

export default Button;
