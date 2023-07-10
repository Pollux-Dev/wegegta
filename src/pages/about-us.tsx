import React from 'react';
import AboutUsPage from '@/scenes/AboutUs';
import { Strapi } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  // Run API calls in parallel
  const team = await Strapi.get('/teams', { params: { populate: '*' } })
    .then((res) => res.data)
    .catch((err) => {
      console.log('erro : ', err);
      // throw new Error(err);
      return {
        team: [],
      };
    });

  console.log('team : ', team);

  return {
    props: {
      team,
    }, // revalidate: 1,
  };
}

const AboutUs = ({ team }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AboutUsPage team={team?.data} />;
};

export default AboutUs;
