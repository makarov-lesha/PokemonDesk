import React from 'react';

interface IPokemonProps {
  id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  return <div>Pokemon ID is equal to {id}</div>;
};

export default Pokemon;
