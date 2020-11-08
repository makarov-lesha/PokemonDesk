import React from 'react';
import Layout from '../../components/Layout/index';

import s from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <>
      <Layout>
        <div className={s.root}>Pokedex</div>
      </Layout>
    </>
  );
};

export default Pokedex;
