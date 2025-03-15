'use client';

import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import NewsletterForm from '@/components/forms/NewsletterForm';

const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

export default function NewsletterSection() {
  return (
    <StyledSection>
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Subscribe to our newsletter for the latest Islamic guidance and community updates.
          </Typography>
        </Box>
        <NewsletterForm />
      </Container>
    </StyledSection>
  );
}
