import React from 'react';
import s from './missions.module.scss';
import Check1 from './chicken-1.png';
import Check2 from './chicken-2.png';
import Sketch from './hous-sketch.png';
import SubIcon from './sub-icon.png';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';

const Missions = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.overlap_img}>
          <Image src={Check2} alt="checken - 2" />
          <Image src={Check1} alt="checken - 1" />
        </div>

        <div className={s.mission_wrapper}>
          <div className={s.mission}>
            <Stack component='header'>
              <Image src={SubIcon} alt="grass" />
              <Typography variant="h4">Wogegta’s Vision & Values</Typography>
            </Stack>

            <Typography variant="body1" className={s.desc}>
            Our vision is to make a country where agriculture-related trade flourishes, and where the people live happily for the next generation. We firmly believe that Ethiopia is a land abundant with developable resources, bestowed upon its citizens by the creator without discrimination. Our strength lies in unity, a divine gift that empowers our effectiveness.
            </Typography>

            <Stack>
              <Typography variant="h5">Our Mission</Typography>
              <Typography variant="body1" className={s.desc}>
              Our mission encompasses ethical customer service, market-research-based product supply for quality and affordability, earning foreign currency through agricultural exports, boosting indigenous productivity via research, all while ensuring effective profitability.
              </Typography>
            </Stack>
          </div>
          <div className={s.sketch_art}>
            <Image src={Sketch} alt="grass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
