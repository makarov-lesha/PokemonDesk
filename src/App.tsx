import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NoFoundPage';

// import s from './App.module.scss';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
