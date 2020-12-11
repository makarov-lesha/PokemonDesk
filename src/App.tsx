import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFoundPage';

// import s from './App.module.scss';
import routes from './routes';
import Header from './components/Header';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
