import React from 'react';
import { A } from 'hookrouter';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },

  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <A href="/">
            <PokemonLogo />
          </A>
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <A className={s.menuLink} href={link} key={id}>
              {value}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
