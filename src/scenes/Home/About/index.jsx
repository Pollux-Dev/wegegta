import React from 'react';
import s from './about.module.scss';
import { Stack, Typography } from '@mui/material';

import Grass from '@/public/assets/grass.png';
import Cow from '@/public/assets/Cow.png';
import Fish from '@/public/assets/Fish.png';
import Chicken from '@/public/assets/Chicken.png';
import House from '@/public/assets/House.png';
import Image from 'next/image';

const cardData = [
  {
    img: Cow,
    title: 'Abattoir & Milk',
  },
  {
    img: Fish,
    title: 'Fishery',
  },
  {
    img: Chicken,
    title: 'Poultry feed',
  },
  {
    img: House,
    title: 'Safe  Storage',
  },
];

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Stack gap={2} sx={{width: '100%'}}>
            <Image src={Grass} alt="grass" />
            <Typography variant="h3" noWrap>
              Farm Ecology <br />
              Products
            </Typography>
          </Stack>

          <div className={s.line} />

          <Typography variant="body1" className={s.about_desc}>
            Farm ecology products are a type of agricultural input that is
            designed to improve the health and productivity of soil and crops.
            dThey can be used to reduce the use of synthetic fertilizers and
            pesticides, and to improve the sustainability of agricultural
            production.
          </Typography>
        </header>

        <div className={s.cards}>
          {cardData.map((card, index) => (
            <div className={s.card} key={index}>
              <div className={s.card_img}>
                <Image src={card.img} alt="card image" />
              </div>
              <div className={s.card_title}>
                <Typography variant="h5" noWrap>
                  {card.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
