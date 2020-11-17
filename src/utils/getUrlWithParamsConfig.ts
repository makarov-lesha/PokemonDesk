import config, { EndpointType } from '../config';

function getUrlWithParamsConfig(endpointConfig: EndpointType) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
  return url;
}

export default getUrlWithParamsConfig;
