/* eslint-disable camelcase */
import React from 'react';
import Layout from '../../components/Layout/index';
import PokemonCard from '../../components/PokemonCard';
import { usePokemons } from '../../api/pokemons';

import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  console.log('data:', data);

  return (
    <>
      <Layout>
        <div className={s.root}>
          {data && data.pokemons.map((item, index) => <PokemonCard key={item.name} pokemonParams={item} />)}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
