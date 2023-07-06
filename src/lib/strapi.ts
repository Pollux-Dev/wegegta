import axios from 'axios';

export function getStrapiURL(path = '') {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  return `${url}${path}`;
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
