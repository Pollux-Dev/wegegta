import Seo from '../../components/seo';
import { fetchAPI } from '@/lib/api';
import ArticlePage from '@/scenes/Article';
import { ApiArticleArticle, ApiCategoryCategory } from '../../../strapi';

const Article = ({ article, categories }) => {
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
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes: ApiArticleArticle = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });

  // console.log('articlesRes ---- :', articlesRes.data[0].attributes.author);

  const categoriesRes = await fetchAPI('/categories');

  return {
    props: {
      article: articlesRes.data[0] as ApiArticleArticle,
      categories: categoriesRes as ApiCategoryCategory,
    },
    revalidate: 1,
  };
}

export default Article;
