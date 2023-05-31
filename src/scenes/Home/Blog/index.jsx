import React from 'react';
import s from './blog.module.scss';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Grass from '/public/assets/grass.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Thumb from './thumb-1.png';

import 'swiper/css';
import 'swiper/css/navigation';

const Blog = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Stack spacing={2}>
            <Image src={Grass} alt="grass" />
            <Typography variant="h3" noWrap>
              Blog Insights
            </Typography>

            <Typography variant="body1" className={s.desc}>
              Farm ecology products are a type of agricultural input that is
              designed to improve the health and productivity of soil and crops.
              dThey can be used to reduce the use of synthetic fertilizers and
              pesticides, and to improve the sustainability of agricultural
              production.
            </Typography>
          </Stack>
        </header>

        <div className={s.slider}>
          <Swiper
            // loop
            slidesPerView={'auto'}
            spaceBetween={30}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: true,
              // nextEl: '.swiper-button-next',
              // prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className={s.swiper}
          >
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <SwiperSlide className={s.slide} key={i}>
                <div className={s.blog_card}>
                  <div className={s.thumb}>
                    <Image src={Thumb} alt="thumbnail" />
                  </div>

                  <div className={s.detail}>
                    <Typography variant="body2">Feb 09, 2023</Typography>

                    <Typography variant="h5">
                      Wegegta fishery & Ethipia market
                    </Typography>

                    <Typography variant="body1" className={s.desc}>
                      I would highly recommend Wegegta to any farmer who is
                      looking to improve their operation. They can provide you
                      with the resources and expertise you need to succeed in
                      today&apos;s competitive agricultural market.
                    </Typography>

                    <Button variant="text" size="large" className={s.btn}>
                      Read More
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
