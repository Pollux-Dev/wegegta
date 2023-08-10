import React from 'react';
import s from './footer.module.scss';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Group from './group.png';
import Image from 'next/image';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <Stack spacing={2}>
            <Typography variant="h4">About us</Typography>

            <Typography>
            At Wegegeta, we excel in a wide array of agro-related services, encompassing animal husbandry, fishery, coffee safe storage, mineral processing, tourism, and import/export solutions. Embracing the essence of Ethiopian modernization, our commitment to uniqueness shines through in every aspect of our offerings. Join us on this transformative journey where tradition and innovation converge, and experience the excellence of proudly made in Ethiopia services.

            </Typography>
          </Stack>
        </div>

        <div className={s.right}>
          <Image src={Group} alt="group image" />

          <div className={s.hor}>
            <Stack className={s.col}>
              <Typography variant="h4" gutterBottom>
                Services
              </Typography>
              <Typography variant="body1">Abattoir</Typography>

              <Typography variant="body1">Dairy</Typography>

              <Typography variant="body1">Fishery</Typography>

              <Typography variant="body1">Poultry</Typography>

              <Typography variant="body1">Animal Feed</Typography>
            </Stack>

            <Stack className={s.col}>
              <Typography variant="h4" gutterBottom>
                Pages
              </Typography>
              <Link href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link href="/about-us">
                <Typography variant="body1">About</Typography>
              </Link>
              <Link href="/ventures">
                <Typography variant="body1">Venture</Typography>
              </Link>

              <Link href="/blogs">
                <Typography variant="body1">Blogs</Typography>
              </Link>
              <Link href="/contact-us">
                <Typography variant="body1">Contact Us</Typography>
              </Link>
            </Stack>
          </div>
        </div>
      </div>

      <div className={s.copyright}>
        <Typography variant="body1">
          © {new Date().getFullYear()} Wegegta. All rights reserved.
        </Typography>

        <div className={s.socials}>
          <LinkedIn fontSize="large" />
          <Facebook fontSize="large" />
          <Instagram fontSize="large" />
          <Twitter fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
