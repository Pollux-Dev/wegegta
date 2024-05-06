import Seo from '../../components/seo';
import { Strapi } from '@/lib/strapi';
import ArticlePage from '@/scenes/Article';
import { ApiArticleArticle, ApiCategoryCategory } from '@/types/contentTypes';

const Article = ({ article, categories }: any) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <ArticlePage article={article} categories={categories} />
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes: any = await Strapi.get('/articles', {
    params: {
      fields: ['slug'],
    },
  }).then((res) => res.data);

  // console.log('getStaticPaths articlesRes ---- :', articlesRes);

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articlesRes: ApiArticleArticle = await Strapi.get('/articles', {
    params: {
      filters: {
        slug: params.slug,
      },
      populate: '*',
    },
  }).then((res) => res.data);

  // console.log('getStaticProps articlesRes ---- :', articlesRes);

  const categoriesRes = await Strapi.get('/categories').then((res) => res.data);

  return {
    props: {
      article: (articlesRes as any).data[0] as ApiArticleArticle || null,
      categories: categoriesRes as ApiCategoryCategory,
    },
    revalidate: 1,
  };
}

export default Article;
