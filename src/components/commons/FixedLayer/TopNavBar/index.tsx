import {
  Button,
  IconButton,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import Link from 'next/link';
import React from 'react';
import s from './topnav.module.scss';
import Logo from '@/public/assets/Logo_small.png';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Language, Phone } from '@mui/icons-material';


interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopNavBar() {
  // console.log('data: ', session, isTalent);
  const router = useRouter();

  return (
    <HideOnScroll>
      <nav className={clsx([s.container])}>
        <Link href="/">
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            className={s.logo_stack}
          >
            <div className={s.logo}>
              <Image src={Logo} alt="enqu-logo" />
            </div>
          </Stack>
        </Link>

        <div
          className={clsx([s.links, router.pathname === '/post' && s.active])}
        >
          <Link href="/">
            <Typography>Home</Typography>
          </Link>

          <Link href="/about-us">
            <Typography>About</Typography>
          </Link>

          <Link href="/ventures">
            <Typography>Venture</Typography>
          </Link>

          <Link href="/products">
            <Typography>Products</Typography>
          </Link>

          <Link href="/blogs">
            <Typography>Blog</Typography>
          </Link>

          <Link href="/contact-us">
            <Typography>Contact-Us</Typography>
          </Link>

          <Button>
            <Stack direction="row" alignItems="center">
              <Phone />
              <Typography>+251 116733233</Typography>
            </Stack>
          </Button>

          <IconButton >
            <Language />
          </IconButton>
        </div>
      </nav>
    </HideOnScroll>
  );
}
