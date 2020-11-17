/* eslint-disable camelcase */
import React, { useState } from 'react';
import Layout from '../../components/Layout/index';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';

import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  console.log('data:', data);

  return (
    <>
      <Layout>
        <div className={s.inputStyle}>
          <h3>Please input Pokemon Name</h3>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.root}>
          {!isLoading &&
            data &&
            data.pokemons.map((item, index) => <PokemonCard key={item.name} pokemonParams={item} />)}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
