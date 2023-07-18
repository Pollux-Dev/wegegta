import React from 'react';
import s from './aboutus.module.scss';
import Hero from './Hero';
import OurMission from './OurMIssion';
import Values from './Values';
import Team from './Team';

type Props = {
  team: any[];
};

const AboutUs = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Hero />
        <OurMission />
        <Values />
        {/*<Team team={team} />*/}
      </div>
    </div>
  );
};

export default AboutUs;
