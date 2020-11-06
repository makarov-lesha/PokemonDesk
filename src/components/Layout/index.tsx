import React from 'react';

// import s from './Layout.module.scss';

interface ILayout {
  className: string;
}

const Layout: React.FC<ILayout> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Layout;
