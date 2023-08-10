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
    desc: 'Our strong ability to conduct agricultural business based on the principles of the commercial sector ensures efficiency and effectiveness in our operations.',
    title: 'Business Acumen',
  },
  {
    img: V2,
    desc: 'We continually update our products and processes, staying at the forefront of innovation and quality by utilizing research results.',
    title: 'Research-Driven Innovation',
  },
  {
    img: V3,
    desc: 'Leveraging local production resources allows us to reduce product quality and price volatility, benefiting both producers and consumers.',
    title: 'Local Resource Advantage',
  },
  {
    img: V3,
    desc: 'Our commitment to sustainability and environmental responsibility promotes ethical practices and fosters long-term agricultural development.',
    title: 'Sustainable Development',
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
          Wegegta is more than an agro business venture; it is a force of positive change in Ethiopia's agricultural landscape. With a focus on commercial principles, research-driven innovations, and resourceful approaches, we redefine the agricultural sector and strive to uplift both farmers and consumers. Our dedication to sustainability and ethical practices underlines our vision for a prosperous future for Ethiopian agriculture.
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
