import React, { useEffect, useState } from 'react';
import s from './blogs.module.scss';
import { Chip, Pagination, Stack, Typography } from '@mui/material';

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
  const [page, setPage] = useState(1);
  const [blogCount, setBlogCount] = useState(1);
  const [blogs, setBlogs] = useState<ApiArticleArticle[]>([]);

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

  useEffect(() => {
    // there is only 6 blogs per page
    // calculate the pagination count and the page number
    const count = Math.ceil(articles.length / 6);
    setBlogCount(count);
  }, []);

  useEffect(() => {
    // get the blogs for the current page
    const start = (page - 1) * 6;
    const end = start + 6;
    setBlogs(articles.slice(start, end));
  }, [page]);

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
                {blogs.map((article, idx) => (
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

              <Pagination
                size="large"
                className={s.pagination}
                count={blogCount}
                onChange={(event, page) => {
                  setPage(page);
                }}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
