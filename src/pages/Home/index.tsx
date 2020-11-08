import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header/index';
import Layout from '../../components/Layout/index';
import Parallax from '../../components/Parallax/Parallax';

import s from './Home.module.scss';

function HomePage() {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, advantages, disadvantages and abilities</p>
          <Button size="narrowSize" color="yellow" fullWidth onClick={(e) => console.log('Click!', e)}>
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
}

export default HomePage;
