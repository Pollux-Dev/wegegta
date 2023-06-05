import React from 'react';
import s from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import Bg from './testimonial-bg.png';
import { Avatar, Card, Typography } from "@mui/material";

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <div className={s.container}>

      {/*<div className={s.bg}>*/}
      {/*  <Image src={Bg} alt="background" />*/}
      {/*</div>*/}

      <div className={s.wrapper_}>

        <div className={s.slider_wrapper}>
          <Swiper
            loop
            slidesPerView={1}
            spaceBetween={30}
            // centeredSlides={true}
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
                <Card elevation={3} className={s.blog_card}>
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
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  );
};

export default Testimonials;
