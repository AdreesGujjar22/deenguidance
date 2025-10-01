'use client';

import { Box, Typography, Container } from '@mui/material';
import ContactForm from '@/components/forms/ContactForm';
import HeroBanner from '../common/HeroBanner';

export default function ContactSection() {
  return (
    <Box id="contact-section" sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <HeroBanner title="Join Our Community" bgImage="/images/contact-us/contact-us.jpg" />
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box textAlign="center" mb={6} className="animate-fadeInUp">
          <Typography 
            variant="h4" 
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: 'var(--font-cinzel-decorative)',
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              fontSize: '1.125rem',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Have questions or want to get involved? We&quot;d love to hear from you! Fill out the form below and we&quot;ll get back to you as soon as possible.
          </Typography>
        </Box>
        <Box 
          className="animate-scaleIn"
          sx={{
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            p: { xs: 3, sm: 4, md: 5 },
            border: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
}
