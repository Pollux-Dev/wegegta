import React from 'react';
import { fetchAPI } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';
import { ApiPagePage } from '@/types/contentTypes';
import FormPage from '@/scenes/Form';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const articlesRes: {
    data: any[];
    meta: Record<string, any>;
  } = await fetchAPI('/pages', { fields: ['title', 'slug'] });

  console.log('articles res ----------- : ', articlesRes);

  if (!articlesRes?.data) {
    return {
      paths: [],
      fallback: false,
    };
  }

  // console.log('fall back true ----------- : ', articlesRes);

  return {
    paths: articlesRes?.data.map((article: any) => ({
      params: {
        slug: article.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log('params --> : ', params);

  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  const pageData: {
    data: ApiPagePage[];
    error: any;
    meta: any;
  } = await fetchAPI(`/pages/${params.slug}`, {
    // filters: {
    //   title: params.slug,
    // },
    populate: {
      form: {
        populate: ['checkBoxItems', 'SelectItems', 'label', 'name', 'items'],
      },
    },
  });

  console.log('pageData ---- :', pageData);
  if (!pageData?.data || pageData?.error) {
    return {
      notFound: true,
      // props: {},
    };
  }

  return {
    props: {
      pageData,
    }, // revalidate: 1,
  };
}

const Form = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  console.log('props - ', props, 'isFallback: ', router.isFallback);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // return <h1>alsdkfj;alkdfsj</h1>

  return <FormPage form={props.pageData} />;
};

export default Form;
