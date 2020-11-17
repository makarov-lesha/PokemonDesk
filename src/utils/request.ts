import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { EndpointType } from '../config';

async function req(endpoint: EndpointType) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  console.log('req -> uri', uri);

  const response = await fetch(uri);
  const result = await response.json();

  return result;
}

export default req;
