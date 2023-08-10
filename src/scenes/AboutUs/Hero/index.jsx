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
            Wegegta Agro Business Share Holding Company is a registered entity under Ethiopian Commercial Law number 1243/2005 and holds Commercial Registration and Business License Proc No.980/2008, with the commercial registration number LK/AA/2/5008138/2015 issued on February 13, 2023.
              <br/>
              <br/>
              At Wegegta, we were initiated by the idea of addressing a critical issue: despite 85% of Ethiopia's population being engaged in agriculture, the products often face challenges such as underpricing, compromised quality, inadequate quantity, and untimely fulfillment of demand. Our mission is to bridge this gap and revolutionize the agricultural sector by delivering premium services and products, fostering growth, and ensuring the prosperity of both farmers and consumers alike.
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
