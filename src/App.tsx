import React from 'react';
import clx from 'classnames';
import s from './App.module.scss';

import About from './About';

const App = () => {
  return (
    <>
      <div className={clx(s.header, 'color')}>Hello, this is App Component!!!</div>
      <About />
    </>
  );
};

export default App;
