"use client"
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/dashboard/HeroSection';
import Services from '../components/dashboard/Services';
import Qoutes from '../components/dashboard/Qoutes';
import Subscribe from '../components/dashboard/Subscribe';
import WhatsAppButton from '../components/common/WhatsAppButton';
import FAQAccordion from '@/components/dashboard/FAQAccordion';
import PageSEO from '@/components/pageseo/PageSEO';

const DashBoard = () => {
  return (
    <>
    <PageSEO
        title="Deen Guidance — Online Quran & Islamic Studies"
        description="Deen Guidance offers live, interactive online Quran and Islamic Studies courses—beginner to advanced—taught by certified teachers. Try a free demo class today!"
        canonicalUrl="https://www.deenguidance.com"
        openGraph={{
          url: 'https://www.deenguidance.com',
          type: 'website',
          title: 'Deen Guidance — Online Quran & Islamic Studies',
          description: 'Live, interactive online Quran and Islamic Studies courses with certified instructors. From Tajweed basics to advanced Tafsir.',
          image: '/images/web-favicon.png',
          siteName: 'Deen Guidance',
        }}
        twitter={{
          cardType: 'summary_large_image',
          siteHandle: '@DeenGuidance',
          creatorHandle: '@DeenGuidance',
          title: 'Deen Guidance — Online Quran & Islamic Studies',
          description: 'Live, interactive online Quran and Islamic Studies courses with certified instructors. From Tajweed basics to advanced Tafsir.',
          image: '/images/web-favicon.png',
        }}
        additionalMetaTags={[
          { name: 'author', content: 'Deen Guidance Team' },
          { name: 'robots', content: 'index,follow' },
          { name: 'keywords', content: 'Quran, Tajweed, Tafsir, Islamic Studies, Online Classes' },
        ]}
      />
    <Box>
      <HeroSection />
      <Qoutes />
      <Services />
      <FAQAccordion />
      <Subscribe />
      <WhatsAppButton
        phoneNumber="+923341436311"
        message="Assalamu'alaikum, I need assistance!"
      />
    </Box>
    </>
  );
};

export default DashBoard;
