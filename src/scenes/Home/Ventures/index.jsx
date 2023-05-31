import React from 'react';
import s from './ventures.module.scss';
import { Button, Typography } from '@mui/material';
import SupIcon from './venture-sup-icon.png';
import Image from 'next/image';

import Cow from './cow.png';
import Car from './car.png';
import Chicken from './chiken.png';
import { ReadMore } from '@mui/icons-material';

const cardData = [
  {
    img: Cow,
    title: 'The Best Animal Ingredient ',
    desc: 'we have the best animal nutrition ingredient to all our customers around the country.',
  },
  {
    img: Car,
    title: 'The Best Farm Equipment',
    desc: 'We provide the greatest farm equipment and machinery to all of our customers throughout the country.',
  },
  {
    img: Chicken,
    title: 'The Best Chicken & Egg',
    desc: 'we have the best Poultry meat and egg production to distribute to every corner.',
  },
];

const Ventures = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Image src={SupIcon} alt="grass" />
          <Typography variant="h3" noWrap>
            Our Business Ventures
          </Typography>
          <Typography variant="body1">
            A business venture is a new business or business activity,
            especially one that involves risk. Business ventures can be started
            by individuals, groups, or organizations. They can be small or
            large, and they can operate in a variety of industries.
          </Typography>
        </header>

        <div className={s.cards}>
          {cardData.map((card, index) => (
            <div className={s.card} key={index}>
              <div className={s.card_img}>
                <Image src={card.img} alt={card.title} />
              </div>
              <Typography variant="h5" noWrap>
                {card.title}
              </Typography>
              <Typography variant="body1">{card.desc}</Typography>

              <Button
                variant="text"
                size="large"
                endIcon={<ReadMore />}
                fullWidth
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;
