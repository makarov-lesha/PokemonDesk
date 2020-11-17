/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import config from '../../config';

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
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
      console.log('usePokemons -> url', url);
    };
    getPokemons();
  }, [amount]);

  return { data, isLoading, isError };
};
