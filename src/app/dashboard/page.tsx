"use client"
import React from 'react';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services/>
      <Footer />
      <WhatsAppButton
        phoneNumber="+923341436311"
        message="Hello, I need assistance!"
      />
    </>
  );
};

export default DashBoard;
