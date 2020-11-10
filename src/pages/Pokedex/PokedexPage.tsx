import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout/index';
import PokemonCard from '../../components/PokemonCard';

import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className={s.root}>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
