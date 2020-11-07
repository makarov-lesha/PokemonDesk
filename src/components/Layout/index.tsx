import React from 'react';
import clx from 'classnames';

import s from './Layout.module.scss';

interface ILayout {
  className?: string;
}

const Layout: React.FC<ILayout> = ({ children, className = null }) => {
  return <div className={clx(s.root, className)}>{children}</div>;
};

export default Layout;
