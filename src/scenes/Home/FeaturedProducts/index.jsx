import React from 'react';
import s from './featuredproducts.module.scss';
import Image from 'next/image';
import SupIcon from './sub-icon.png';
import { Typography } from '@mui/material';
import Cow from './meat.png';
import Car from './chiken.png';
import Chicken from './bean.png';

const cardData = [
  {
    img: Cow,
    title: 'Meat ',
    desc: 'We have the best abattoir and meat, and we send high-quality meat right to your house.',
  },
  {
    img: Car,
    title: 'Chicken',
    desc: 'We have the greatest chicken meat and will deliver it to your house.',
  },
  {
    img: Chicken,
    title: 'Animal Feed',
    desc: 'We have the greatest animal nutrition ingredients for a variety of livestock & poultry.',
  },
];

const FeaturedProducts = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Image src={SupIcon} alt="grass" />
          <Typography variant="h3">
            Featured Products
          </Typography>
          <Typography variant="body1">
            We have produced and manufactured a lot of products under different
            venture and sectors. Here are the a few products below.
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
