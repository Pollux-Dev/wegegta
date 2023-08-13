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
import Link from 'next/link';

/*{
    "id": 1,
    "attributes": {
        "title": "What's inside a Black Hole",
        "description": "Maybe the answer is in this article, or not...",
        "content": "Well, we don't know yet...",
        "slug": "what-s-inside-a-black-hole",
        "featured": false,
        "createdAt": "2023-07-03T14:06:39.635Z",
        "updatedAt": "2023-07-03T14:06:39.635Z",
        "publishedAt": "2023-07-03T14:06:39.504Z",
        "category": {
            "data": {
                "id": 1,
                "attributes": {
                    "name": "news",
                    "slug": "news",
                    "createdAt": "2023-07-03T14:06:38.965Z",
                    "updatedAt": "2023-07-03T14:06:38.965Z"
                }
            }
        },
        "image": {
            "data": {
                "id": 4,
                "attributes": {
                    "name": "what-s-inside-a-black-hole",
                    "alternativeText": "what-s-inside-a-black-hole",
                    "caption": "what-s-inside-a-black-hole",
                    "width": 800,
                    "height": 466,
                    "formats": {
                        "small": {
                            "ext": ".jpg",
                            "url": "/uploads/small_what_s_inside_a_black_hole_2ae4d87747.jpg",
                            "hash": "small_what_s_inside_a_black_hole_2ae4d87747",
                            "mime": "image/jpeg",
                            "name": "small_what-s-inside-a-black-hole",
                            "path": null,
                            "size": 3.89,
                            "width": 500,
                            "height": 291
                        },
                        "medium": {
                            "ext": ".jpg",
                            "url": "/uploads/medium_what_s_inside_a_black_hole_2ae4d87747.jpg",
                            "hash": "medium_what_s_inside_a_black_hole_2ae4d87747",
                            "mime": "image/jpeg",
                            "name": "medium_what-s-inside-a-black-hole",
                            "path": null,
                            "size": 6.94,
                            "width": 750,
                            "height": 437
                        },
                        "thumbnail": {
                            "ext": ".jpg",
                            "url": "/uploads/thumbnail_what_s_inside_a_black_hole_2ae4d87747.jpg",
                            "hash": "thumbnail_what_s_inside_a_black_hole_2ae4d87747",
                            "mime": "image/jpeg",
                            "name": "thumbnail_what-s-inside-a-black-hole",
                            "path": null,
                            "size": 1.55,
                            "width": 245,
                            "height": 143
                        }
                    },
                    "hash": "what_s_inside_a_black_hole_2ae4d87747",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "size": 7.5,
                    "url": "/uploads/what_s_inside_a_black_hole_2ae4d87747.jpg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2023-07-03T14:06:39.606Z",
                    "updatedAt": "2023-07-03T14:06:39.606Z"
                }
            }
        },
        "author": {
            "data": {
                "id": 2,
                "attributes": {
                    "name": "Sarah Baker",
                    "email": "sarahbaker@strapi.io",
                    "createdAt": "2023-07-03T14:06:39.495Z",
                    "updatedAt": "2023-07-03T14:06:39.495Z"
                }
            }
        }
    }
}*/

const Blog = ({ articles }: { articles: any[] }) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));

  // console.log('articles :  ', articles);

  if (!articles || articles.length === 0) {
    return null;
  }

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
              Wegegta is a leading agricultural company in Ethiopia. We are a
              team of professionals who work hard to provide our customers with
              the best quality products and services.
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
            {articles.map((article, i) => (
              <SwiperSlide className={s.slide} key={i}>
                <Card elevation={1} className={s.blog_card}>
                  <div className={s.thumb}>
                    <Image src={Thumb} alt="thumbnail" />
                  </div>

                  <div className={s.detail}>
                    <Typography variant="body2">
                      {new Date(article.attributes.publishedAt).toDateString()}
                    </Typography>

                    <Typography variant="h5">
                      {article.attributes.title}
                    </Typography>

                    <Typography variant="body1" className={s.desc}>
                      {article.attributes.description.slice(0, 100)}
                    </Typography>

                    <Link href={`/blogs/${article.attributes.slug}`}>
                      <Button variant="text" size="large" className={s.btn}>
                        Read More
                      </Button>
                    </Link>
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
