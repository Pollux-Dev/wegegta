import React from 'react';
import s from './newsletter.module.scss';
import { Button, Stack, TextField, Typography } from '@mui/material';
import Ship1 from './ship-1.png'
import Ship2 from './ship-2.png'
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className={s.container}>

      <Image src={Ship1} alt='ships' className={s.ship1}/>
      <Image src={Ship2} alt='ships-2' className={s.ship2}/>

      <div className={s.wrapper}>
        <Stack spacing={1}>
          <Typography variant="body2">Newsletter</Typography>
          <Typography variant="h4">Get Weekly Updates</Typography>
          <Typography variant="body1" className={s.desc}>
            We firmly believe that Ethiopia is a land abundant with developable resources, bestowed upon its citizens by the creator without discrimination. Our strength lies in unity, a divine gift that empowers our effectiveness.
          </Typography>
        </Stack>

        <div className={s.input}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            type="email"
            fullWidth
          />

          <Button variant="contained" className={s.btn}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
