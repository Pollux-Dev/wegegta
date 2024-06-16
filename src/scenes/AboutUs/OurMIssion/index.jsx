import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import MissionPic from './mission.png';
import s from './mission.module.scss';

const OurMission = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <Stack spacing={2}>
          <Stack className={s.title}>
            <Typography variant="h3">Our Mission</Typography>
            <Typography variant="subtitle1">Wogegta encompasses</Typography>
          </Stack>

          <Typography variant="body1" className={s.desc}>
          1.	<strong>Profitability:</strong> Ensure the company's sustainability and profitability. <br/>
          2.	<strong>Customer Satisfaction:</strong> Deliver quality, affordable, and sustainable products to achieve customer satisfaction.<br/>
          3.	<strong>Value Chain Relationships:</strong> Establish value and marketing chain relationships with farmers/pastoralists for mutual benefit.<br/>
          4.	<strong>Organic Agriculture:</strong> Actively contribute to expanding organic agricultural production, emphasizing research and biodiversity, and providing healthier food options.<br/>

          </Typography>
        </Stack>
      </div>

      <div className={s.right}>
        <Image src={MissionPic} alt="grass" />
      </div>
    </div>
  );
};

export default OurMission;
