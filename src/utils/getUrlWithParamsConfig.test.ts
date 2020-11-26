import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Should take two arguments, "getpokemons" and empty object. Output should be the object with pathname, protocol, host and empty object', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });
  test('Should take two arguments, "getpokemons" and query object {name: "pikachu"} . Output should be the object with pathname, protocol, host and query object with name equal to pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'pikachu' },
    });
  });
  test('Should take two arguments, "getpokemon" and query object {id: 25} . Output should be the object with pathname, protocol, host and empty query object', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
