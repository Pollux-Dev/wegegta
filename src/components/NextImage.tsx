import NextImage from 'next/image';
import { getStrapiMedia } from '@/lib/media';

const Image = ({ image, style }: any) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      // layout="responsive"
      width={width || '100%'}
      height={height || '100%'}
      style={{ ...style }}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
