import qs from 'qs';
import axios from 'axios';

export function getStrapiURL(path = '') {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  // const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://172.20.10.4:1337';

  // replace the local host with an IP
  // const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://0

  return `${url}${path}`;
}

export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options = {},
): Promise<any> {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN_READONLY}`,
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`,
  )}`;

  // Trigger API call && Handle response
  try {
    const response = await fetch(requestUrl, mergedOptions);
    // const response = await axios.get(requestUrl, mergedOptions);
    const data = await response.json();
    // console.log('fetch response: --> ', data);

    return data;
  } catch (err) {
    console.log('error happens :', err);
    // throw new Error('An error occurred please try again : ', err?.message);
  }
}

export function getStrapiMedia(media: any) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

export const Strapi = axios.create({
  baseURL: `${getStrapiURL('/api')}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_READONLY}`,
  },
});

// create un interceptor to add the token to the request if this is on the client side other wise assess
