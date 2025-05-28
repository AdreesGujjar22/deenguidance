// src/components/FAQAccordion.tsx
'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FAQItem from './FAQItem';
import { faqItems } from '../../data/FAQItems/FAQItems';

const FAQAccordion: React.FC = () => (
  <Box
    component="section"
    sx={{
      py: 8,
      backgroundColor: 'background.default',
    }}
  >
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: 'CinzelDecorative',
          color: "#000",
          letterSpacing: "1px",
          zIndex: 1,
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
        }}
      >
        Your Questions Answered
      </Typography>
      <Box>
        {faqItems.map((item, idx) => (
          <FAQItem
            key={idx}
            question={item.question}
            answer={item.answer}
            defaultExpanded={item.question === 'What are your guarantees?'}
          />
        ))}
      </Box>
    </Container>
  </Box>
);

export default FAQAccordion;
