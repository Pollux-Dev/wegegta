import React from 'react';
import s from './hero.module.scss';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Grass from './sub-icon.png';
import VentureHeroImg from './hero-img.png';

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Stack spacing={2}>
            <Image src={Grass} alt="grass" />
            <Typography variant="h3">Business Ventures</Typography>

            <Typography variant="body1" className={s.desc}>
              An agri-business venture is a business that is involved in the
              production, processing, or distribution of agricultural products.
              Agri-business ventures can range in size from small family farms
              to large multinational corporations. Agri-business ventures play
              an important role in the global economy. They provide food and
              fiber for the world&apos;s population, and they support millions
              of of jobs.
            </Typography>
          </Stack>
        </header>

        <div className={s.right}>
          <Image src={VentureHeroImg} alt="grass" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
