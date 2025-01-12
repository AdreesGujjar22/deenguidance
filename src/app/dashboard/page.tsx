"use client"
import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import WhatsAppButton from '../../components/WhatsAppButton';
const DashBoard = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Subscribe />
      <WhatsAppButton
        phoneNumber="+923341436311"
        message="Hello, I need assistance!"
      />
    </>
  );
};

export default DashBoard;
