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

            <Typography variant="body2" className={s.desc}>
              Wogegta Agriculture Business Share Company is taking a bold initiative to transform the agricultural landscape in our country, recognizing the longstanding challenges faced by the majority of our population involved in agriculture. The aim is to bridge the gap between farmers and consumers by ensuring the delivery of high-quality, affordable, and timely agricultural products. Through strategic planning and adherence to ethical values, Wogegta is committed to becoming a profitable and influential entity in both the agriculture and business sectors.
              <br/>
              <br/>
              The agricultural sector in our country has been grappling with inefficiencies that have led to suboptimal quality, insufficient quantity, unfavorable pricing, and untimely delivery of products. This persistent situation has contributed to an alarming increase in the cost of living, adversely affecting the overall socio-economic landscape. Wogegta Agriculture Business Share Company aims to address these challenges by leveraging its newly acquired registration under Commercial Registration No. LK/AA/2/5008138/2015.
              <br/>
              <br/>
              Wogegta Agriculture Business Share Company, established in accordance with Ethiopian Commercial Law No. 1243/2015 and Business Registration and Licensing Proclamation No. 980/2008, envisions becoming a profitable and influential entity in the agriculture and business sectors. The company is dedicated to sustainable practices, customer satisfaction, and fostering mutually beneficial relationships with farmers and pastoralists.
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
