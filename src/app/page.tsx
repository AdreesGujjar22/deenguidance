"use client"
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/dashboard/HeroSection';
import Services from '../components/dashboard/Services';
import Course from '../components/dashboard/Course';
import Qoutes from '../components/dashboard/Qoutes';
import Subscribe from '../components/dashboard/Subscribe';
import WhatsAppButton from '../components/common/WhatsAppButton';

const DashBoard = () => {
  return (
    <Box component="main">
      <HeroSection />
      <Services />
      <Course />
      <Qoutes />
      <Subscribe />
      <WhatsAppButton
        phoneNumber="+923341436311"
        message="Assalamu'alaikum, I need assistance!"
      />
    </Box>
  );
};

export default DashBoard;
