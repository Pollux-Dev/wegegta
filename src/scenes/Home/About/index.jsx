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
          At Wegegeta, we excel in a wide range of agro-related services. Our expertise spans across various domains, including animal husbandry, fishery, coffee, safe storage, mineral resources, tourism, as well as import and export operations. We take pride in our unique approach, ensuring that every service we provide reflects the essence of "Made in Ethiopia" modernization.
          Our commitment to excellence is evident in every step we take, where we deliver our specialized services with utmost proficiency and innovation.  
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
