import React from 'react';
import s from './blogs.module.scss';
import { Chip, Stack, Typography } from '@mui/material';
import FeaturedThumb from './featured-thumb.png';
import Image from 'next/image';

import Meat from './meat.png';
import Hen from './hen.png';
import Egg from './egg.png';
import Sidebar from '@/scenes/Blogs/Sidebar';

const blogList = [Meat, Hen, Egg];

const Blogs = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Typography variant="h1">THE BLOG</Typography>
        </header>

        <div className={s.content}>
          <div className={s.left}>
            <Stack spacing={2}>
              <Typography variant="h4">Featured Post</Typography>

              <div className={s.featured}>
                <div className={s.info}>
                  <Chip label="category" color="success" size="small" />
                  <Typography className={s.title}>
                    Ideas that changed the Agribusiness
                  </Typography>
                  <Typography variant="body2">
                    July 28, 2022 · 6 min read
                  </Typography>
                </div>
                <div className={s.thumb}>
                  <Image src={FeaturedThumb} alt="featured-thumb" />
                </div>
              </div>
            </Stack>

            <Stack sx={{ mt: 10 }} spacing={2}>
              <Typography variant="h4">Recent Post</Typography>

              <div className={s.b_list}>
                {blogList.map((img, idx) => (
                  <div className={s.b_card} key={idx}>
                    <Image src={img} alt="featured-thumb" />
                    <div className={s.b_info}>
                      <Chip label="category" color="success" size="small" />
                      <Typography className={s.b_title}>
                        7 Things about Agribusiness & Wegegata
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Stack>
          </div>

          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
