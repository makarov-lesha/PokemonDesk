import React from 'react';
// import clx from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div>Made with &#128151;</div>
      <div className={s.team}>Our Team</div>
    </div>
  );
};

export default Footer;
