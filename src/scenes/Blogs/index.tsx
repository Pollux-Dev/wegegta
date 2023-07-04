import React, { useEffect, useState } from 'react';
import s from './blogs.module.scss';
import { Chip, Stack, Typography } from '@mui/material';

import Meat from './meat.png';
import Hen from './hen.png';
import Egg from './egg.png';
import Sidebar from '@/scenes/Blogs/Sidebar';
import moment from 'moment';
import NextImage from '@/components/NextImage';
import Link from 'next/link';
import { ApiArticleArticle } from '@/types/contentTypes';

const blogList = [Meat, Hen, Egg];

type PropType = {
  articles: ApiArticleArticle[];
};

const Blogs = ({ articles }: PropType) => {
  const [featuredArticle, setFeaturedArticle] = useState<ApiArticleArticle>(
    articles[0],
  );

  // console.log('articles: ', featuredArticle);

  useEffect(() => {
    setFeaturedArticle(
      articles.find((article) => article.attributes?.featured === true) ||
        articles[0],
    );
  }, []);

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

              <Link href={`blogs/${featuredArticle.attributes.slug}`}>
                <div className={s.featured}>
                  <div className={s.info}>
                    <Chip
                      label={
                        featuredArticle?.attributes?.category?.data?.attributes
                          ?.name
                      }
                      color="success"
                      size="small"
                    />
                    <Typography className={s.title}>
                      {featuredArticle?.attributes?.title}
                    </Typography>
                    <Typography variant="body2">
                      {moment(featuredArticle?.attributes?.publishedAt)
                        .toDate()
                        .toDateString()}
                    </Typography>
                  </div>
                  <div className={s.thumb}>
                    <NextImage
                      image={featuredArticle.attributes.image}
                      alt="blog"
                    />
                  </div>
                </div>
              </Link>
            </Stack>

            <Stack sx={{ mt: 10 }} spacing={2}>
              <Typography variant="h4">Recent Post</Typography>

              <div className={s.b_list}>
                {articles.slice(1, 4).map((article, idx) => (
                  <Link href={`blogs/${article.attributes.slug}`} key={idx}>
                    <div className={s.b_card}>
                      <div className={s.b_thumb}>
                        <NextImage
                          image={article.attributes.image}
                          alt="blog"
                        />
                      </div>
                      <div className={s.b_info}>
                        <Chip
                          label={
                            article?.attributes?.category?.data?.attributes
                              ?.name
                          }
                          color="success"
                          size="small"
                        />
                        <Typography className={s.b_title}>
                          {article.attributes.title}
                        </Typography>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Stack>
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
