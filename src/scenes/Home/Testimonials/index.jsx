import React from 'react';
import s from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import Bg from './testimonial-bg.png';
import { Avatar, Button, Card, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import 'swiper/css';
import clsx from 'clsx';
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
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: true,
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            modules={[Navigation]}
            className={s.swiper}
          >
            <Button
              variant="contained"
              className={clsx(['testimonial-next', s.btn])}
            >
              <ChevronRight />
            </Button>
            <Button
              variant="contained"
              className={clsx(['testimonial-prev', s.btn])}
            >
              <ChevronLeft />
            </Button>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <SwiperSlide className={s.slide} key={i}>
                <Card elevation={3} className={s.blog_card}>
                  <Typography variant="body1" className={s.desc}>
                    {/* I would highly recommend Wogegta to any farmer who is
                    looking to improve their operation. They can provide you
                    with the resources and expertise you need to succeed in
                    today&apos;s competitive agricultural market. */}
                    I must say, my experience with Wogegta agro services has
                    been truly exceptional. The care and attention they put into
                    sourcing local ingredients and incorporating modern
                    practices reflect their commitment to quality. As a
                    consumer, I feel confident knowing that their products
                    farmers and promote the rich agricultural heritage of
                    Ethiopia. Wogegta has undoubtedly won my trust as a reliable
                    and forward-thinking agro business.
                  </Typography>
                  <div className={s.avatar}>
                    <Avatar />
                    <div className={s.info}>
                      <Typography variant="subtitle1">Alemu Tegegne</Typography>
                      <Typography variant="body2">Farm Owner</Typography>
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
