import React from 'react';

export interface IPokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
  return <div>Pokemon ID is equal to {id}</div>;
};

export default PokemonPage;
