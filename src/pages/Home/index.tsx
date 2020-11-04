import React from 'react';
import Header from '../../components/Header/index';

import s from './Home.module.scss';

function HomePage() {
  return (
    <div className={s.root}>
      <Header />
    </div>
  );
}

export default HomePage;
