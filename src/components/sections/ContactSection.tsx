'use client';

import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '@/components/forms/ContactForm';
import HeroBanner from '../common/HeroBanner';

const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

export default function ContactSection() {
  return (
    <StyledSection id="contact-section">
      <HeroBanner title="Join Our Community" bgImage="/images/contact-us/contact-us.jpg" />
      <Container maxWidth="md">
        <Box textAlign="center" my={6}>
          <Typography variant="subtitle1" color="text.secondary" mb={4}>
            Contact Us ! Have questions or want to get involved? We love to hear from you!
          </Typography>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Container>
    </StyledSection>
  );
}
