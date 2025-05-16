// src/components/FAQItem.tsx
'use client';
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQItemProps } from '@/types/FAQItemProps';

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultExpanded = false,
}) => {
  const theme = useTheme();

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        '&:hover': {
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-expanded': {
          borderColor: theme.palette.primary.main,
        },
        boxShadow : "none",
        py : 1,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
        sx={{
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            // flex: 1,
            color: 'text.primary',
            // fontWeight: 300,
            // fontSize: { xs: '1.25rem', md: '1.75rem' },
            '&.Mui-expanded, &:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.9rem', md: '1rem' },
            lineHeight: 1.6,
            textAlign : "start"
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;
