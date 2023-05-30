import React from 'react';
import s from './layout.module.scss';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FixedLayer from '@/components/commons/FixedLayer';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <FixedLayer />

      <motion.div className={s.root}>
        <main>
          <Typography variant="h5">Contact Page</Typography>
          {children}
        </main>
      </motion.div>
    </>
  );
};

export default Layout;
