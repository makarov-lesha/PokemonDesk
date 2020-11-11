import React from 'react';
import { A, usePath } from 'hookrouter';
import clx from 'classnames';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <A href="/">
            <PokemonLogo />
          </A>
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A className={clx(s.menuLink, { [s.activeLink]: link === path })} href={link} key={title}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
