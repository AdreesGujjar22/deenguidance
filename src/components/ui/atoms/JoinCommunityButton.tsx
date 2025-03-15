'use client';

import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
}));

export default function JoinCommunityButton(props: ButtonProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledButton
      variant="contained"
      color="primary"
      onClick={scrollToContact}
      {...props}
    >
      Join Community
    </StyledButton>
  );
}
