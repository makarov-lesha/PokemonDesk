import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex/Pokedex';

import s from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/" exact component={HomePage} />
              <Route
                render={() => (
                  <div className={s.notFound}>
                    <h2>Что-то пошло не так...</h2>
                  </div>
                )}
              />
            </Switch>
          </BrowserRouter>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
