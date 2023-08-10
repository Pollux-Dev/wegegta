import React from 'react';
import s from './blog.module.scss';
import { Button, Card, Stack, Typography, useMediaQuery } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import Image from 'next/image';
import Grass from '/public/assets/grass.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Thumb from './thumb-1.png';

import 'swiper/css';
import 'swiper/css/navigation';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Blog = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));
  // const match = useMediaQuery(theme.breakpoints.up('lg'))
  //
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
              Wegegta is a leading agricultural company in Ethiopia. We are a team of professionals who work hard to provide our customers with the best quality products and services.
            </Typography>
          </Stack>
        </header>

        <div className={s.slider}>
          <div className={s.nav_btns}>
            <Button variant="contained" className="blog-prev">
              <ChevronLeft />
            </Button>

            <Button variant="contained" className="blog-next">
              <ChevronRight />
            </Button>
          </div>

          <Swiper
            loop
            slidesPerView={match ? 3 : 'auto'}
            spaceBetween={30}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              enabled: true,
              nextEl: '.blog-next',
              prevEl: '.blog-prev',
            }}
            modules={[Navigation]}
            className={s.swiper}
          >
            {Array.from([1, 2, 3, 4, 5, 6]).map((_, i) => (
              <SwiperSlide className={s.slide} key={i}>
                <Card elevation={1} className={s.blog_card}>
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
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
