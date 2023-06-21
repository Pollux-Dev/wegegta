import React from 'react';
import s from './contactus.module.scss';
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import Map from '@/public/assets/map.png';
import Image from 'next/image';
import { Email, Fax, Phone } from '@mui/icons-material';

const contactMedia = [
  {
    name: 'Phone',
    subTitle: '+25190000000',
    icon: <Phone />,
  },
  {
    name: 'Email',
    subTitle: 'info@wegegta.com',
    icon: <Email />,
  },
  {
    name: 'Fax',
    subTitle: '+123456',
    icon: <Fax />,
  },
];

const ContactUs = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.decoration} />

        <Stack spacing={2}>
          <form>
            <Typography variant="h2">
              <span>Get in</span>
              Touch
            </Typography>

            <Typography>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus
            </Typography>

            <Stack spacing={2}>
              <TextField label="Name" variant="outlined" />
              <TextField label="Email" variant="outlined" />
              <TextField label="Phone Number" variant="outlined" />

              <FormControl fullWidth className={s.marketing}>
                <InputLabel id="where">Where did you hear about us?</InputLabel>
                <Select
                  labelId="where"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Google search</MenuItem>
                  <MenuItem value={20}>Facebook</MenuItem>
                  <MenuItem value={30}>Instagram</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained" color="primary">
                Send
              </Button>
            </Stack>
          </form>

          <Stack direction="row" gap={1} className={s.contact_media}>
            {contactMedia.map((item, idx) => (
              <ListItem alignItems="flex-start" key={idx}>
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">{item.name}</Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.subTitle}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </Stack>
        </Stack>

        <div className={s.map}>
          <Image src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
