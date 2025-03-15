'use client';

import { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { FormProps } from '@/types/forms';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));

export default function NewsletterForm({ onSuccess, onError, className }: FormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not properly configured');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          subscriber_email: email,
          subscription_date: new Date().toLocaleDateString(),
        },
        publicKey
      );

      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to subscribe';
      toast.error(errorMessage);
      onError?.(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={className}>
      <StyledPaper elevation={0} variant="outlined">
        <TextField
          required
          fullWidth
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={loading}
          sx={{ flexGrow: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={loading}
          sx={{ minWidth: 120 }}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </StyledPaper>
    </Box>
  );
}
