import React from 'react';
import s from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import Bg from './testimonial-bg.png';
import { Avatar, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <div className={s.container}>
      <Image src={Bg} alt="background" className={s.bg} />

      <div className={s.wrapper}>
        <Swiper
          loop
          pagination={{
            clickable: true,
          }}
          navigation={{
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className={s.swiper}
        >
          <button className="swiper-button-next"></button>
          <button className="swiper-button-prev"></button>
          {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
            <SwiperSlide className={s.slide} key={i}>
              <div className={s.testimony}>
                <Typography variant="body1" className={s.desc}>
                  I would highly recommend Wegegta to any farmer who is looking
                  to improve their operation. They can provide you with the
                  resources and expertise you need to succeed in today&apos;s
                  competitive agricultural market.
                </Typography>
                <div className={s.avatar}>
                  <Avatar />
                  <div className={s.info}>
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Typography variant="body2">Farmer</Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
