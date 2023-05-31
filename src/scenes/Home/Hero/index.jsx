import React from 'react';
import s from './hero.module.scss';

import HeroPic from '@/public/assets/Hero-pic.png';
import HeroShape from '@/public/assets/Hero-Shape.png';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.hero_bg}>
          <Image src={HeroPic} alt="hero background" />
        </div>

        <div className={s.hero_shape}>
          <Image src={HeroShape} alt="hero background" />
        </div>
      </div>
    </div>
  );
};

export default Home;
