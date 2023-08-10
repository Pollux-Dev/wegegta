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
            Wegegeta, as an agri-business venture, encompasses a diverse range of activities involved in the production, processing, and distribution of agricultural products. From small family farms to multinational corporations, we contribute significantly to the global economy. Our operations provide essential sustenance and fiber for the world's population while generating employment opportunities for millions. With a focus on excellence and modernization, we take pride in delivering top-notch agro-related services that cater to the unique needs of our clients and proudly represent Ethiopia on the global stage.
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
