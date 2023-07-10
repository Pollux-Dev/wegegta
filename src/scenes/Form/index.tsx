import React, { useEffect, useRef, useState } from 'react';
import s from './forms.module.scss';
import { Button, Card, Typography } from '@mui/material';
import { ApiPagePage } from '@/types/contentTypes';
import { getField } from './getField';
import { Send } from '@mui/icons-material';
import { useFormik } from 'formik';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { Strapi } from '@/lib/strapi';

type PropsType = {
  form: {
    error?: Record<string, any>;
    meta?: Record<string, any>;
    data: ApiPagePage & { id: string };
  };
};

const Forms = ({ form: { data, meta } }: PropsType) => {
  const [initialValues, setInitialValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<any[]>([]);

  // console.log('data -----   : ', data);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      if (!formRef.current) return;

      const submissionData = {
        formTitle: data.attributes.title,
        formId: `${data.id}`,
        formData: {
          ...values,
        },

        form: {
          disconnect: [],
          connect: [
            {
              id: data.id,
              position: {
                end: true,
              },
            },
          ],
        },
      };

      const formElement = formRef.current;
      const formData = new FormData();

      Array.from(formElement.elements).forEach((element: any) => {
        const { name, type, value, files } = element;

        if (type === 'file') {
          console.log('arg --- > : ', name, type, value, files);

          Array.from(files).forEach((file: any) => {
            formData.append(`files.${name}`, file, file.name);
          });
        }
      });

      formData.append('data', JSON.stringify(submissionData));
      // console.log('form Data: ', formData);

      setIsLoading(true);
      Strapi.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/form-submissions/submissions`,
        formData,
        {
          withCredentials: false,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
        .then((res) => {
          console.log('sumitResponse: ', res);
          setIsLoading(false);
          toast.success('Form Submitted Successfully!');
          // formik.resetForm();
          // router.replace('/thank-you');
        })
        .catch((error) => {
          console.log('error submiting: ', error?.response?.data);
          setIsLoading(false);
          toast.error(error?.response?.data?.message || 'Something Wrong!');
        })
        .finally(() => {
          //Perform action in always
        });
    },
  });

  useEffect(() => {
    const formInitialValue = data.attributes.form.reduce(
      (acc: any, form: any) => {
        const formName = form.name;
        return {
          ...acc,
          [formName]: '',
        };
      },
      {},
    );

    setInitialValues(formInitialValue);

    // console.log('forms ----- : ', forms);
  }, [data]);

  useEffect(() => {
    // __component:"form.agreement"

    const formFields = (data.attributes.form as any[]).sort((a, b) => {
      if (a.__component === 'form.agreement') return 1;
      if (b.__component === 'form.agreement') return -1;
      return 0;
    });

    setFields(formFields);

    console.log('formFields: ', formFields);
  }, [data]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Typography variant="h4" className={s.title}>
            {data.attributes.title}
          </Typography>
          <Typography variant="body1" className={s.desc}>
            {data.attributes.description}
          </Typography>
        </header>

        <Card elevation={3} className={s.content}>
          <form onSubmit={formik.handleSubmit} ref={formRef}>
            {fields.map((form: any, idx: any) => (
              <React.Fragment key={idx}>
                {getField(form, formik, setIsLoading)}
              </React.Fragment>
            ))}

            <LoadingButton
              loading={isLoading}
              type="submit"
              size="large"
              variant="contained"
              endIcon={<Send />}
            >
              Submit
            </LoadingButton>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Forms;
