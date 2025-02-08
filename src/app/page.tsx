"use client"
import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import Services from '../components/dashboard/Services';
import Subscribe from '../components/dashboard/Subscribe';
import Qoutes from '../components/dashboard/Qoutes';
import Course from '../components/dashboard/Course';
// import Blog from '../components/dashboard/Blog';
import WhatsAppButton from '../components/common/WhatsAppButton';

const DashBoard = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Course />
      <Qoutes />
      <Subscribe />
      {/* <Blog /> */}
      <WhatsAppButton
        phoneNumber="+923341436311"
        message="Hello, I need assistance!"
      />
    </>
  );
};

export default DashBoard;
