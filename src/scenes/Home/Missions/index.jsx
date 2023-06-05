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
              <Typography variant="h4">Wegegta’s Values & Vision</Typography>
            </Stack>

            <Typography variant="body1" className={s.desc}>
              Our mission is to provide our customers with the freshest,
              highest-quality agricultural products possible. We are committed
              to sustainable agriculture practices, and we use only the most
              natural methods to grow our crops and raise our animals. We are
              also proud to be a part of our community, and we are committed to
              giving back.
            </Typography>

            <Stack>
              <Typography variant="h5">Our Values</Typography>
              <Typography variant="body1" className={s.desc}>
                We believe that Ethiopia is a country that has resources that
                can be developed and has been given to its citizens without
                discrimination by the creator plus We believe that union is a
                divine gift and our power of effectiveness.
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
