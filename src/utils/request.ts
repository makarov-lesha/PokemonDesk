import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { EndpointType } from '../config';

async function req<T>(endpoint: EndpointType, query?: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const response = await fetch(uri);
  const result = await response.json();
  return result;
}

export default req;
