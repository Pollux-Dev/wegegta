import React from 'react';
import s from './about.module.scss';
import { Typography } from '@mui/material';
import Cow from '/public/assets/Cow.png';
import Fish from '/public/assets/Fish.png';
import Chicken from '/public/assets/Chicken.png';
import House from '/public/assets/House.png';
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

  /*{
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
  },*/
];

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
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
