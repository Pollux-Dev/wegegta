import React from 'react';
import BlogsPage from '@/scenes/Blogs';
import { fetchAPI } from '@/lib/api';
import {
  ApiArticleArticle,
  ApiCategoryCategory,
  ApiHomepageHomepage,
} from '../../../strapi';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  // Run API calls in parallel

  const [articlesRes, categoriesRes, homepageRes]: any = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
    fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data || ([] as ApiArticleArticle[]),
      categories: categoriesRes.data as ApiCategoryCategory[],
      homepage: homepageRes.data as ApiHomepageHomepage,
    },
    revalidate: 1,
  };
}

// type the props from getStaticProps

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('porps -- --> : ', props);

  const { articles, categories, homepage } = props;

  // format the json string
  // const data = JSON.stringify(props, null, 2);

  return (
    <>
      <BlogsPage articles={props.articles} />
    </>
  );
};

export default Blogs;
