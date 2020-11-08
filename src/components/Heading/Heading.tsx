import React from 'react';

// import s from './Heading.module.scss';

interface IHeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<IHeadingProps> = ({ children, level = 'h1', ...props }) => {
  return React.createElement(`${level}`, props, children);
};

export default Heading;
