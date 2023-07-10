import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import s from './team.module.scss';
import V1 from './team-pic/Desktop-Vector 11-1.png';
import V2 from './team-pic/Desktop-Vector 11-1.png';
import V3 from './team-pic/Desktop-Vector 11-2.png';
import V4 from './team-pic/Desktop-Vector 11-3.png';
import { getStrapiMedia } from '@/lib/strapi';

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

type Props = {
  team: any[];
};
const OurMission = ({ team }: Props) => {
  console.log('props :', team);

  return (
    <div className={s.container}>
      <div className={s.left}>
        <Stack spacing={2}>
          <Stack className={s.title}>
            <Typography variant="subtitle1">Team</Typography>
            <Typography variant="h3">
              Professional working <br /> Team
            </Typography>
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
          {team.map((value, index) => (
            <div className={s.value} key={index}>
              <div className={s.pp}>
                <Image
                  src={getStrapiMedia(value.attributes.picture)}
                  alt="grass"
                  fill
                />
              </div>
              <Typography variant="h5">{value.attributes.name}</Typography>
              <Typography>( {value.attributes.role} )</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
