/* eslint-disable camelcase */
import React, { useState } from 'react';
import Layout from '../../components/Layout/index';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, IPokemon } from '../../interface/pokemon';

import s from './PokedexPage.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

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
            data.pokemons.map((item: IPokemon) => <PokemonCard key={item.name} pokemonParams={item} />)}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
