import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import s from './mission.module.scss';
import V1 from './value-pic/Vector.png';
import V2 from './value-pic/Vector-1.png';
import V3 from './value-pic/Vector-2.png';

const values = [
  {
    img: V1,
    desc: 'A commitment to honesty, ethics, and fairness.',
    title: 'Transparent',
  },
  {
    img: V2,
    desc: 'A commitment to providing high-quality products or services.',
    title: 'Commitment',
  },
  {
    img: V3,
    desc: 'A commitment to continuous improvement and innovation.',
    title: 'Always Growing',
  },
  {
    img: V3,
    desc: 'A commitment to continuous improvement and innovation.',
    title: 'Over Deliver',
  },
];

const OurMission = () => {
  return (
    <div className={s.container}>

      <div className={s.left}>
        <Stack spacing={2}>
          <Stack className={s.title}>
            <Typography variant="h3">Our Company Values</Typography>
            <Typography variant="subtitle1">Wegegta</Typography>
          </Stack>

          <Typography variant="body1" className={s.desc}>
            Company values can be a powerful tool for creating a strong company
            culture. When employees share a common set of values, they are more
            likely to be motivated and engaged in their work. This can lead to
            improved productivity, customer satisfaction, and profitability.
          </Typography>
        </Stack>
      </div>

      <div className={s.right}>
        {values.map((value, index) => (
          <div className={s.value} key={index}>
            <Image src={value.img} alt="grass" />
            <Typography variant="h5">{value.title}</Typography>
            <Typography>{value.desc}</Typography>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurMission;
