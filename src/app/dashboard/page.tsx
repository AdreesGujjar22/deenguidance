"use client"
import React from 'react';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services/>
      <Footer />
    </>
  );
};

export default DashBoard;
