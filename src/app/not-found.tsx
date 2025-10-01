'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, Search } from '@mui/icons-material';

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Animated Background Circle */}
          <Box
            component={motion.div}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: 250, md: 400 },
              height: { xs: 250, md: 400 },
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              zIndex: 0,
            }}
          />

          {/* Illustration Container */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              position: 'relative',
              zIndex: 1,
              mb: 4,
            }}
          >
            {/* Laptop/Monitor Illustration */}
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                width: { xs: 280, md: 400 },
                height: { xs: 180, md: 250 },
              }}
            >
              {/* Monitor Frame */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '85%',
                  backgroundColor: 'white',
                  border: '6px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                }}
              >
                {/* 404 Text */}
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '4rem', md: '6rem' },
                    color: 'primary.main',
                    fontFamily: 'var(--font-cinzel-decorative)',
                    lineHeight: 1,
                  }}
                >
                  404
                </Typography>

                {/* Globe Icon */}
                <Box
                  component={motion.div}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: { xs: 20, md: 40 },
                    width: { xs: 50, md: 70 },
                    height: { xs: 50, md: 70 },
                    borderRadius: '50%',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '60%',
                      height: '60%',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transform: 'translateY(-50%)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '50%',
                        width: '2px',
                        backgroundColor: 'primary.main',
                        transform: 'translateX(-50%)',
                      },
                    }}
                  />
                </Box>

                {/* Search Icon */}
                <Box
                  component={motion.div}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: { xs: 20, md: 40 },
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                  }}
                >
                  <Search
                    sx={{
                      fontSize: { xs: 60, md: 80 },
                      color: 'primary.main',
                    }}
                  />
                </Box>
              </Box>

              {/* Monitor Base */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '4px',
                  backgroundColor: 'primary.main',
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: '4px',
                  backgroundColor: 'primary.main',
                  borderRadius: 1,
                }}
              />
            </Box>
          </Box>

          {/* Text Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              position: 'relative',
              zIndex: 1,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                fontFamily: 'var(--font-cinzel-decorative)',
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              Page Not Found
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.7,
                mb: 1,
              }}
            >
              We are sorry, but the page you requested was not found.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '0.875rem', md: '1rem' },
                opacity: 0.7,
              }}
            >
              The link you followed may be broken or the page may have been removed.
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Home />}
              onClick={() => router.push('/')}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(0, 77, 64, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  boxShadow: '0 6px 24px rgba(0, 77, 64, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Go Home
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.back()}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(0, 77, 64, 0.04)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
