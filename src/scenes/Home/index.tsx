import React from 'react';
import s from './home.module.scss';
import Hero from './Hero';
import About from './About';
import Missions from './Missions';
import Ventures from './Ventures';
import Newsletter from '../../components/Newsletter';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Blog from './Blog';

const Home = ({ articles }: any) => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
      <Missions />
      <Ventures />
      <div className={s.newsletter}>
        <Newsletter />
      </div>
      <FeaturedProducts />
      <Testimonials />
      <Blog articles={articles} />
    </div>
  );
};

export default Home;
