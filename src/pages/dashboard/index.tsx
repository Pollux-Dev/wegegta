import React, { useEffect } from 'react';
import { fetchAPI } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  // Run API calls in parallel

  const pages = await fetchAPI('/pages', { populate: '*' });

  // console.log('pagesRes: ', pagesRes);

  return {
    props: {
      pages,
    }, // revalidate: 1,
  };
}

const Dashboard = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log('porps: ', props);

  useEffect(() => {
    if (props.pages?.error) {
      console.log(
        'there is an error in your api fetch ---> ',
        props.pages.error,
      );
      return;
    }

    console.log('pages : ', props.pages?.data);
  }, [props]);

  return <h1>there was a dashboard</h1>;
};

export default Dashboard;
