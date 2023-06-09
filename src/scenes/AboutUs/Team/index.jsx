import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import s from './team.module.scss';
import V1 from './team-pic/Desktop-Vector 11-1.png';
import V2 from './team-pic/Desktop-Vector 11-1.png';
import V3 from './team-pic/Desktop-Vector 11-2.png';
import V4 from './team-pic/Desktop-Vector 11-3.png';

const values = [
  {
    img: V1,
    desc: '( chief executive officer )',
    title: 'Ato Belay',
  },
  {
    img: V2,
    desc: '( chief Marketing officer )',
    title: 'Ato Belay',
  },
  {
    img: V3,
    desc: '( chief Technical officer )',
    title: 'Ato Belay',
  },
  {
    img: V4,
    desc: '( chief Technical officer )',
    title: 'Ato Belay',
  },
];

const OurMission = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <Stack spacing={2}>
          <Stack className={s.title}>
            <Typography variant="subtitle1">Team</Typography>
            <Typography variant="h3">Professional working <br/> Team</Typography>
          </Stack>

          <Typography variant="body1" className={s.desc}>
            Our team is made up of experienced farmers and ranchers who are
            passionate about agriculture. We are committed to providing our
            customers with the best possible service, and we are always looking
            for new ways to improve our products and services. We hope you will
            visit us soon and see for yourself why we are so passionate about
            agriculture. We are confident that you will be impressed with the
            quality of our products and the dedication of our staff.
          </Typography>
        </Stack>
      </div>

      <div className={s.right}>
        <div>
          {values.map((value, index) => (
            <div className={s.value} key={index}>
              <Image src={value.img} alt="grass" />
              <Typography variant="h5">{value.title}</Typography>
              <Typography>{value.desc}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
