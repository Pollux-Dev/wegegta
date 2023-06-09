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
            <Image src={Grass} alt="grass"/>
            <Typography variant="h3">Business Ventures</Typography>

            <Typography variant="body1" className={s.desc}>
              At Wegegta, we are passionate about agriculture and the role it
              plays in our food system. We believe that everyone deserves access
              to fresh, healthy food, and we are committed to providing our
              customers with the highest-quality products possible.
              <br/>
              <br/>
              We are a family-owned and operated business that has been in
              operation for the past years. We are committed to sustainable
              agriculture practices, and we use only the most natural methods to
              grow our crops. We also raise our own animals, and we believe that
              humanely-raised meat and poultry is the best way to ensure that
              our customers are getting the healthiest possible food.
            </Typography>
          </Stack>
        </header>

        <div className={s.right}>
          <Image src={VentureHeroImg} alt="grass"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
