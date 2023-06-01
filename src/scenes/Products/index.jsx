import React from 'react';
import s from './products.module.scss';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Grass from './sub-icon.png';

const Products = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Stack spacing={2} direction="row">
            <Image src={Grass} alt="grass" />
            <Typography variant="h3" noWrap>
              Products
            </Typography>
          </Stack>
        </header>
      </div>
    </div>
  );
};

export default Products;
