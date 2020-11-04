import React from 'react';
// import clx from 'classnames';
import s from './App.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>Content</div>
      <Footer />
    </div>
  );
};

export default App;
