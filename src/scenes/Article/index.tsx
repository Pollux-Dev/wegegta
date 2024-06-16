import React from 'react';
import s from './article.module.scss';
import ReactMarkdown from 'react-markdown';
import NextImage from '@/components/NextImage';
import Moment from 'react-moment';
import { Avatar, Stack, Typography } from '@mui/material';
import { getStrapiMedia } from '@/lib/strapi';
import { ApiArticleArticle, ApiCategoryCategory } from '@/types/contentTypes';

type PropsType = {
  article: ApiArticleArticle;
  categories: ApiCategoryCategory;
};

const Article = ({ article, categories }: PropsType) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  // console.log('article: ', article);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography className={s.title} variant="h3">
          {article.attributes.title}
        </Typography>
        <div className={s.article_img}>
          <NextImage image={article.attributes.image} />
        </div>
        <div className="uk-section">
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mt: '2rem' }}
            >
              <Avatar>W</Avatar>
              <Stack>
                <Typography variant="subtitle1">wogegta</Typography>
                <Typography>
                  Published -{' '}
                  <Moment format="MMM Do YYYY">
                    {(article.attributes as any).published_at}
                  </Moment>
                </Typography>
              </Stack>
            </Stack>
          </div>

          <hr />

          <div className={s.content}>
            <ReactMarkdown
              children={article.attributes.content}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
