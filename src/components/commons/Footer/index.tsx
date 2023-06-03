import React from 'react';
import s from './footer.module.scss';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Group from './group.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <Stack spacing={2}>
            <Typography variant="h4">About us</Typography>

            <Typography>
              We hope you will visit us soon and see for yourself why we are so
              passionate about agriculture. We are confident that you will be
              impressed with the quality of our products and the dedication of
              our staff.
            </Typography>
          </Stack>
        </div>

        <div className={s.right}>
          <Image src={Group} alt="group image" />

          <div className={s.hor}>
            <Stack>
              <Typography variant="h4" gutterBottom>
                Pages
              </Typography>
              <Link href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Products</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Venture</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Contact-Us</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Blogs</Typography>
              </Link>
            </Stack>

            <Stack>
              <Typography variant="h4" gutterBottom>
                Services
              </Typography>
              <Link href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Products</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Venture</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Contact-Us</Typography>
              </Link>
              <Link href="/">
                <Typography variant="body1">Blogs</Typography>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
