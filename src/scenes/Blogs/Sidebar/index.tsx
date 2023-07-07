import React from 'react';
import s from './sidebar.module.scss';

import Social1 from '@/public/social/facebook.png';
import Social2 from '@/public/social/insta.png';
import Social3 from '@/public/social/linkedin.png';
import Social4 from '@/public/social/twitter.png';
import Add from '@/public/social/Desktop-Rectangle 37.png';
import Link from 'next/link';
import Image from 'next/image';
import { Stack, TextField, Typography } from '@mui/material';

const social = [
  {
    name: 'facebook',
    img: Social1,
    link: '/',
  },
  {
    name: 'instagram',
    img: Social2,
    link: '/',
  },
  {
    name: 'linkedin',
    img: Social3,
    link: '/',
  },
  {
    name: 'twitter',
    img: Social4,
    link: '/',
  },
];

const Sidebar = () => {
  return (
    <aside className={s.container} id="sticky">
      <Stack spacing={2}>
        <Typography variant="h5">Follow us</Typography>
        <div className={s.social}>
          {social.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <Image src={item.img} alt={item.name} />
            </Link>
          ))}
        </div>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h5">Newsletter</Typography>
        <Typography variant="body1">
          Get all the latest contents delivered a few times a month.
        </Typography>
        <TextField label="Email" variant="outlined" />
      </Stack>

      <Image src={Add} alt="addvertisement" />
    </aside>
  );
};

export default Sidebar;
