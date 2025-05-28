'use client';

import { Box, Typography, Container } from '@mui/material';
import ContactForm from '@/components/forms/ContactForm';
import HeroBanner from '../common/HeroBanner';

export default function ContactSection() {
  return (
    <Box id="contact-section">
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
    </Box>
  );
}
