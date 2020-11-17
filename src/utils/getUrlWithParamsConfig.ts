import config, { EndpointType } from '../config';

function getUrlWithParamsConfig(endpointConfig: EndpointType = 'getPokemons', query?: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: { ...query },
  };
  return url;
}

export default getUrlWithParamsConfig;
