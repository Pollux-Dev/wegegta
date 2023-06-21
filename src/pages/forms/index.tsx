import React, { useEffect } from 'react';
import { fetchAPI } from '@/lib/strapi';

const MyComponent = () => {
  useEffect(() => {
    const ff = async () => {
      const articlesRes: {
        data: any[];
        meta: Record<string, any>;
      } = await fetchAPI('/pages', { fields: ['title', 'slug'] });

      console.log('articleRes ;', articlesRes);
    };

    ff();
  }, []);

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
      deserunt eligendi enim explicabo facilis illo neque nulla porro quasi
      voluptatibus.
    </div>
  );
};

export default MyComponent;
