import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout/index';
import PokemonCard from '../../components/PokemonCard';
import pokemons from './pokemons';

import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className={s.root}>
          {pokemons.map((item, index) => (
            <PokemonCard key={item.name} pokemonParams={item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
