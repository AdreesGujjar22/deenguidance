'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import JoinCommunityButton from '@/components/ui/atoms/JoinCommunityButton';

const StyledHeader = styled('header')(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  padding: theme.spacing(12, 0, 8),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

export default function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="md">
        <Box mb={4}>
          <StyledTitle variant="h1">
            Welcome to Deen Guidance
          </StyledTitle>
          <Typography variant="h5" gutterBottom>
            Your Journey to Islamic Knowledge Starts Here
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <JoinCommunityButton size="large" />
        </Stack>
      </Container>
    </StyledHeader>
  );
}
