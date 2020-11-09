import { useRoutes } from 'hookrouter';

// import s from './App.module.scss';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match;
};

export default App;
