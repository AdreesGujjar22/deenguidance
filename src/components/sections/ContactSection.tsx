'use client';

import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '@/components/forms/ContactForm';

const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export default function ContactSection() {
  return (
    <StyledSection id="contact-section">
      <Container maxWidth="md">
        <Box textAlign="center" my={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={4}>
            Have questions or want to get involved? We love to hear from you!
          </Typography>
        </Box>
        <StyledPaper elevation={2}>
          <ContactForm />
        </StyledPaper>
      </Container>
    </StyledSection>
  );
}
