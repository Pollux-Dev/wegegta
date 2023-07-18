import React from 'react';
import { Strapi } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';
import { ApiPagePage } from '@/types/contentTypes';
import FormPage from '@/scenes/Form';
import { useRouter } from 'next/router';

type ResponseType = {
  data: ApiPagePage;
  error: any;
  meta: any;
};

type FetchAllResType = {
  data: object[];
  meta: Record<string, any>;
};

export async function getStaticPaths() {
  const pages = await Strapi.get('/pages', {
    params: { fields: ['title', 'slug'] },
  })
    .then((res) => {
      const pages: FetchAllResType = res.data;

      console.log('pages ----- :', pages);

      return {
        paths: pages?.data.map((article: any) => ({
          params: {
            slug: article.id.toString(),
          },
        })),
        fallback: true,
      };
    })
    .catch((err) => {
      // todo -> throw error to know what failed in dev

      // throw err;

      console.log(
        'Error fetching pages in getStaticPaths -------------- > : ',
        err,
      );

      return {
        paths: [],
        fallback: false,
      };
    });

  console.log('pages res ----------- : ', pages);

  return pages;
}

export async function getStaticProps({ params }: any) {
  console.log('params --> : ', params);

  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  const pageData = await Strapi.get(`/pages/${params.slug}`, {
    params: {
      populate: {
        form: {
          populate: ['label', 'name', 'items'],
        },
      },
    },
  })
    .then((res) => {
      return {
        props: {
          pageData: res.data,
        },
      };
    })
    .catch((err) => {
      console.log('Error fetching pages in getStaticProps -------------- > : ');

      return {
        notFound: true,
      };
    });

  // console.log('pageData axsios ---- :', pageData);
  return pageData;
}

const Form = (props: any) => {
  const router = useRouter();

  console.log('props - ', props.pageData, 'isFallback: ', router.isFallback);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // return <h1>alsdkfj;alkdfsj</h1>;

  return <FormPage form={props.pageData} />;
};

export default Form;
