import Head from 'next/head';
import HomePage from '@/scenes/Home';
import { Strapi } from '@/lib/strapi';
import {
  ApiArticleArticle,
  ApiCategoryCategory,
  ApiHomepageHomepage,
} from '@/types/contentTypes';
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes]: any = await Promise.all([
    Strapi.get('/articles', { params: { populate: '*' } }).then(
      (res) => res.data,
    ),
    Strapi.get('/categories', { params: { populate: '*' } }).then(
      (res) => res.data,
    )
  ]);

  return {
    props: {
      articles: articlesRes.data || ([] as ApiArticleArticle[]),
      categories: categoriesRes.data as ApiCategoryCategory[],
    }, // revalidate: 1,
  };
}

export default function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Wogegta SC.</title>
        <meta
          name="description"
          content="Wogegta SC."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage articles={articles} />
    </>
  );
}
