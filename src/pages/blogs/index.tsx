import React from 'react';
import BlogsPage from '@/scenes/Blogs';
import { Strapi } from '@/lib/strapi';
import {
  ApiArticleArticle,
  ApiCategoryCategory,
  ApiHomepageHomepage,
} from '@/types/contentTypes';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes]: any = await Promise.all([
    Strapi.get('/articles', { params: { populate: '*' } }).then(
      (res) => res.data,
    ),
    Strapi.get('/categories', { params: { populate: '*' } }).then(
      (res) => res.data,
    ),
    Strapi.get('/homepage', {
      params: {
        populate: {
          hero: '*',
          seo: { populate: '*' },
        },
      },
    }).then((res) => res.data),
  ]);

  return {
    props: {
      articles: articlesRes.data || ([] as ApiArticleArticle[]),
      categories: categoriesRes.data as ApiCategoryCategory[],
      homepage: homepageRes.data as ApiHomepageHomepage,
    },
    // revalidate: 1,
  };
}

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogsPage articles={props.articles} />;
};

export default Blogs;
