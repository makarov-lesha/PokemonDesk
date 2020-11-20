import React from 'react';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

import { IPokemon } from '../../interface/pokemon';

interface IPokemonProps {
  pokemonParams: IPokemon;
  key?: any;
}

const PokemonCard: React.FC<IPokemonProps> = ({ pokemonParams }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level="h6" className={s.titleName}>
          {pokemonParams.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}> {pokemonParams.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemonParams.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemonParams.img} alt={pokemonParams.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
