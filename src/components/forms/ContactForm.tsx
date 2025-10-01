'use client';

import { useState } from 'react';
import { TextField, Box, Grid, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { ContactFormData, FormProps } from '@/types/forms';
import MainButton from '../common/MainButton';

const StyledForm = styled('form')(() => ({
  width: '100%',
  maxWidth: '700px',
  margin: '0 auto',
  padding: 0,
}));

const initialFormData: ContactFormData & {
  source?: string;
  purpose?: string;
  phone?: string;
} = {
  name: '',
  email: '',
  subject: '',
  message: '',
  source: '',
  purpose: '',
  phone: '',
};

const sourceOptions = [
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Google',
  'Friend or Colleague',
  'Other',
];

const purposeOptions = [
  'Course Enrollment',
  'To Learn About Islam',
  'To Know More About Our Website',
  'General Inquiry',
  'Other',
];

export default function ContactForm({ onSuccess, onError, className }: FormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not properly configured');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: formData.source || 'Not specified',
          purpose: formData.purpose || 'Not specified',
          phone: formData.phone || 'Not provided',
        },
        publicKey
      );

      toast.success('Message sent successfully!');
      setFormData(initialFormData);
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast.error(errorMessage);
      onError?.(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={className} aria-label="Contact form">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Full Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
            placeholder="Enter your full name"
            inputProps={{
              'aria-label': 'Full name',
              'aria-required': 'true',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
            placeholder="your.email@example.com"
            inputProps={{
              'aria-label': 'Email address',
              'aria-required': 'true',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone (Optional)"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="How did you hear about us?"
            name="source"
            value={formData.source}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
          >
            {sourceOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            required
            fullWidth
            label="Purpose of Contact"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
          >
            {purposeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Subject"
            name="subject"
            inputProps={{ 'aria-describedby': 'subject-helper' }}
            value={formData.subject}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
          />
          <Box id="subject-helper" component="span" sx={{ display: 'none' }}>
            Provide a short, descriptive subject
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Message"
            name="message"
            inputProps={{ 'aria-describedby': 'message-helper' }}
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            disabled={loading}
          />
          <Box id="message-helper" component="span" sx={{ display: 'none' }}>
            Share details about your request or question
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box 
            display="flex" 
            justifyContent="flex-end"
            sx={{ mt: 2 }}
          >
            <MainButton
              content={loading ? 'Sending...' : 'Send Message'}
              disabled={loading}
              type="submit"
              aria-label={loading ? 'Sending message' : 'Send message'}
              sx={{
                minWidth: '160px',
                py: 1.5,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
  );
}
