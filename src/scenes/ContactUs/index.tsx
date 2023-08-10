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
import { Email, Fax, Phone, Telegram } from '@mui/icons-material';

const contactMedia = [
  {
    name: 'Office Phone',
    subTitle: 'Office +251 116733233',
    icon: <Phone />,
  },
  {
    name: 'Mobile Phone',
    subTitle: 'Mobile: +251 992392978',
    icon: <Phone />,
  },
  {
    name: 'Email',
    subTitle: 'wogegta@gmail.com',
    icon: <Email />,
  },
  {
    name: 'Telegram',
    subTitle: 'Wogegta SC',
    icon: <Telegram />,
  }
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
              
            Get in touch with us to learn more about our services and how we can help you. We look forward to hearing from you. 
            <br/>                    
            አዲስ አበባ፣ የካ ክ/ከተማ፣ ወረዳ 13 ጉጂ ሃይላንድ ኮፊ ፕላንቴሽን PLC ህንጻ 4ኛ ፎቅ ቢሮ ቁጥር 401
            <br/>
            Addis Abeba, Yeka S/city, Woreda 13; Guji Highland Coffee Plantation PLC Building 4th floor Office No. 401. Wogegta Agribusiness SC.
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
