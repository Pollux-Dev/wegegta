import React from 'react';
import s from './fixed.module.scss';
import TopNavBar from '@/components/commons/FixedLayer/TopNavBar';

const FixedLayer = () => {
  const links = ['About', 'FAQs', 'Contact Us'];

  return (
    <div className={s.container}>
      <TopNavBar />
    </div>
  );
};

export default FixedLayer;
