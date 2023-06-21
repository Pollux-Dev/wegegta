import { SvgIcon } from '@mui/material';
import {
  ContentPaste,
  Dashboard,
  Outbox,
  Send,
  SettingsApplications,
} from '@mui/icons-material';
import React from 'react';

export const adminPaths = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <Dashboard />
      </SvgIcon>
    ),
  },
  {
    title: 'Messaging',
    path: '/dashboard/message',
    icon: (
      <SvgIcon fontSize="small">
        <Send />
      </SvgIcon>
    ),
  },
  {
    title: 'Application',
    path: '/dashboard/application',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsApplications />
      </SvgIcon>
    ),
  },
  {
    title: 'Forms',
    path: '/dashboard/forms',
    icon: (
      <SvgIcon fontSize="small">
        <ContentPaste />
      </SvgIcon>
    ),
  },
  {
    title: 'Blog',
    path: '/blogs',
    icon: (
      <SvgIcon fontSize="small">
        <Outbox />
      </SvgIcon>
    ),
  },
];
