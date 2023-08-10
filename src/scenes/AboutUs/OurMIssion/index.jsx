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
            <Typography variant="subtitle1">Wegegta</Typography>
          </Stack>

          <Typography variant="body1" className={s.desc}>
            Our mission encompasses ethical customer service, market-research-based product supply for quality and affordability, earning foreign currency through agricultural exports, boosting indigenous productivity via research, all while ensuring effective profitability.
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
