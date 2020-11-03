import React from 'react';
// import clx from 'classnames';
import s from './Header.module.scss';
import PokemonLogo from '../assets/pokemonLogo.svg';
import BurgerMenu from '../assets/burger.svg';

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.logo} src={PokemonLogo} alt="React Logo" />
      <img className={s.burger} src={BurgerMenu} alt="React Logo" />
      <div>
        <li className={s.navgroup}>
          <ul>Home</ul>
          <ul>Pokedex</ul>
          <ul>Legendaries</ul>
          <ul>Documentation</ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
