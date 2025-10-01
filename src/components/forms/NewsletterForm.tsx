'use client';

import { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, CheckCircle } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { FormProps } from '@/types/forms';

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
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        backgroundColor: '#fafafa',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{
            backgroundColor: 'white',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Left Column - Content */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                p: { xs: 4, md: 6 },
              }}
            >
              {/* Title */}
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontFamily: 'var(--font-cinzel-decorative)',
                  color: 'primary.main',
                  mb: 2,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  lineHeight: 1.2,
                }}
              >
                Subscribe to Our Newsletter
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: { xs: '0.9375rem', md: '1rem' },
                  lineHeight: 1.7,
                }}
              >
                Stay updated with our latest Islamic teachings, courses, and community events. Get exclusive content delivered to your inbox every week.
              </Typography>

              {/* Form */}
              <Box
                component="form"
                onSubmit={handleSubmit}
                aria-label="Newsletter subscription form"
                sx={{
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#f8f9fa',
                        borderRadius: 2,
                        height: 56,
                        '& fieldset': {
                          borderColor: 'rgba(0,0,0,0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                      },
                    }}
                    inputProps={{
                      'aria-label': 'Email address for newsletter subscription',
                      'aria-required': 'true',
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    aria-label={loading ? 'Subscribing to newsletter' : 'Subscribe to newsletter'}
                    sx={{
                      minWidth: { xs: '100%', sm: 140 },
                      height: 56,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 4,
                      boxShadow: '0 4px 16px rgba(0, 77, 64, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        boxShadow: '0 6px 24px rgba(0, 77, 64, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                      },
                      '&.Mui-disabled': {
                        backgroundColor: 'rgba(0, 77, 64, 0.5)',
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </Box>
              </Box>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Weekly Islamic insights and teachings',
                  'Exclusive course announcements',
                  'Community event updates',
                ].map((feature, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: 'secondary.main',
                        fontSize: 20,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Illustration */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{
                position: 'relative',
                height: { xs: 300, md: 500 },
                background: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  border: '3px dashed rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                }}
              />

              {/* Email Icon Illustration */}
              <Box
                component={motion.div}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                sx={{
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    backgroundColor: 'rgba(219, 158, 48, 0.2)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Email
                    sx={{
                      fontSize: { xs: 60, md: 80 },
                      color: 'white',
                    }}
                  />
                </Box>
              </Box>

              {/* Decorative Dots */}
              {[...Array(6)].map((_, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  sx={{
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    top: `${20 + (i * 15)}%`,
                    right: `${10 + (i % 3) * 20}%`,
                  }}
                />
              ))}

              {/* Plus Icons */}
              {[...Array(4)].map((_, i) => (
                <Box
                  key={`plus-${i}`}
                  sx={{
                    position: 'absolute',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: { xs: 20, md: 24 },
                    top: `${15 + (i * 25)}%`,
                    left: `${15 + (i % 2) * 60}%`,
                  }}
                >
                  +
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
