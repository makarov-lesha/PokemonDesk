import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/index';
import Parallax from '../../components/Parallax/Parallax';

import s from './Home.module.scss';

function HomePage() {
  const history = useHistory();

  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading level="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, advantages, disadvantages and abilities</p>
          <Button onClick={(e) => history.push('/pokedex')}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
}

export default HomePage;
