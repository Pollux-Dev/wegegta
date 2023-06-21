import qs from 'qs';
import axios from 'axios';

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  // const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://172.20.10.4:1337';

  return `${url}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options = {},
): Promise<any> {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
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
});

const AUTH_TOKEN = 'auth_token';
export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
