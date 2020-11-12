/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

export interface IPokemon {
  abilities: string[];
  base_experience: number;
  height: number;
  id: number;
  img: string;
  is_default: boolean;
  name: string;
  name_clean: string;
  order: number;
  stats: {
    attack: number;
    defense: number;
    hp: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
}

export interface IData {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
}

export const usePokemons = (amount: number = 10) => {
  const [data, setData] = useState<IData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://zar.hosthot.ru/api/v1/pokemons?limit=${amount}`);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, [amount]);

  return { data, isLoading, isError };
};
