import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Pokedex from './pages/Pokedex/PokedexPage';
import PokemonPage, { IPokemonProps } from './pages/Pokemon/PokemonPage';

interface IGenMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGenMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },

  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECONDARY_ROUTES: IGenMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IPokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [m: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECONDARY_ROUTES].reduce((acc: IAccMenu, item: IGenMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
