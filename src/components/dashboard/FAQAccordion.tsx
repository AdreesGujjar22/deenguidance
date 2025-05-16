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
        component="h2"
        variant="h3"
        sx={{
          fontWeight: 300,
          mb: 6,
        }}
      >
        Your&nbsp;
        <Box component="br" sx={{ display: { md: 'none' } }} />
        Questions&nbsp;
        <Typography
          component="span"
          variant="h3"
          sx={{ fontWeight: 500 }}
        >
          Answered
        </Typography>
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
