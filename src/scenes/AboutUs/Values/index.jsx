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
            <Typography variant="subtitle1">Wogegta</Typography>
          </Stack>

          <Typography variant="body1" className={s.desc}>
          Wogegta Agriculture Business Share Company is guided by the following values:<br/><br/>
          1.	<strong>Benefit for All:</strong> Belief in the collective benefit of the country's wealth.<br/>
          2.	<strong>Authenticity:</strong> Upholding genuine and honest practices.<br/>
          3.	<strong>Transparency:</strong> Operating with openness and clarity.<br/>
          4.	<strong>Customer Orientation:</strong> Prioritizing customer needs and satisfaction.<br/>
          5.	<strong>Affordability and Quality:</strong> Providing products that are both affordable and of high quality.<br/>
          6.	<strong>Unity and Solidarity:</strong> Fostering a spirit of collaboration.<br/>

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
