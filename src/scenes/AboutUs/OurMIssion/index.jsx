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
            Our mission is to provide our customers with the freshest,
            highest-quality agricultural products possible. We are committed to
            sustainable agriculture practices, and we use only the most natural
            methods to grow our crops and raise our animals. We are also proud
            to be a part of our community, and we are committed to giving back.
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
