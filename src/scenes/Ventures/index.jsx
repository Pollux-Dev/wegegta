import React from 'react';
import s from './ventures.module.scss';
import Hero from './Hero';
import About from './About';

const Ventures = () => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
    </div>
  );
};

export default Ventures;
