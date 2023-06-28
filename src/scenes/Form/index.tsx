import React, { useEffect, useState } from 'react';
import s from './forms.module.scss';
import { Button, Card, Typography } from '@mui/material';
import { ApiPagePage } from '@/types/contentTypes';
import { getField } from './getField';
import { Send } from '@mui/icons-material';
import { useFormik } from 'formik';
import axios from 'axios';

type PropsType = {
  form: {
    error?: Record<string, any>;
    meta?: Record<string, any>;
    data: ApiPagePage;
  };
};

const Forms = ({ form: { data, meta } }: PropsType) => {
  // console.log('data -----   : ', data);
  const [initialValues, setInitialValues] = useState({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      console.log('onSubmit: ', values);

      const token = 'recaptcha token';
      const formData = {
        formName: 'farm-1',
        formData: {
          ...values,
        },
      };

      axios
        .post('http://localhost:1337/api/ezforms/submit', formData, {
          withCredentials: false,
        })
        .then((res) => {
          console.log('sumitResponse: ', res);
        })
        .catch((error) => {
          console.log('error submiting: ', error);
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
    },
  });

  // console.log('formik vlaues: ', formik.values);

  useEffect(() => {
    // console.log('values: ', formik.values);
  }, [formik.values]);

  useEffect(() => {
    const forms = data.attributes.form.reduce((acc, form) => {
      const formName = form.name.text;
      return {
        ...acc,
        [formName]: '',
      };
    }, {});

    setInitialValues(forms);

    console.log('forms ----- : ', forms);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Typography variant="h3" className={s.title}>
            {data.attributes.title}
          </Typography>
          <Typography variant="body1" className={s.desc}>
            {data.attributes.description}
          </Typography>
        </header>

        <Card elevation={3} className={s.content}>
          <form onSubmit={formik.handleSubmit}>
            {data.attributes.form.map((form, idx) => (
              <React.Fragment key={idx}>
                {getField(form, formik)}
              </React.Fragment>
            ))}

            <Button
              type="submit"
              size="large"
              variant="contained"
              endIcon={<Send />}
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Forms;
